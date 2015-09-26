// Function which returns number used to sort correctly when showing calculations
getTimeFunction = function(){
  date = new Date();
  counter = date.getTime();
  return counter;
};

//Function to blank all booleans and temp-variable when equalbutton is pressed
blankAllFunction = function(){
  Session.set("temp1","");
  Session.set("addPushed",false);
  Session.set("subPushed",false);
  Session.set("multiPushed",false);
  Session.set("divPushed",false);
  Session.set("modPushed",false);
  Session.set("powerPushed",false);
  Session.set("sqrPushed",false);
  Session.set("binPushed",false);
};

//Function for adding to numbers
addFunction = function(temp1,temp2){
  temp1 = parseFloat(temp1);
  temp2 = parseFloat(temp2);
  temp1 = (temp1 + temp2);
  return temp1.toFixed(2);
};

//Function for subtracting to numbers
subFunction = function(temp1,temp2){
  temp1 = parseFloat(temp1);
  temp2 = parseFloat(temp2);
  temp1 = (temp1-temp2);
  return temp1.toFixed(2);
};

//Function for mulitplying to numbers
multiplyFunction = function(temp1, temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp2 = temp1*temp2;
  return temp2.toFixed(2);
};

//Function for dividing to numbers
dividFunction = function(temp1, temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp2 = temp1/temp2;
  return temp2.toFixed(2);
};

//Function for modulo
modFunction = function(temp1,temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp = temp1 % temp2;
  return temp.toFixed(2);
};

//Function for power of
powerofFunction = function(temp1,temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp = Math.pow(temp1,temp2);
  return temp.toFixed(2);
};

//Function for square root
sqrFunction = function(temp1){
  parseFloat(temp1);
  temp = Math.sqrt(temp1);
  return temp.toFixed(2);
};

//Function for converting a decimal to binary
toBinaryFunction = function(temp1){
  temp1 = parseInt(temp1);
  return temp1.toString(2); //2 is the radix, the base of the input.
};


//Check to set variables to false when equal is pushed
function checkEqual(){
  if(Session.get("equalPushed") || Session.get("binPushed") || Session.get("sqrPushed"))
  {
    if(Session.get("subPushed"))
    {
      return;
    }
    else
    {
      Session.set("result", "");
      Session.set("equalPushed", false);
      Session.set("binPushed", false);
      Session.set("sqrPushed", false);
    }
}
}


// Template helpers
  Template.buttons.helpers({
    "btn9" : function() {return Session.get("btn9");},
    "btn8" : function() {return Session.get("btn8");},
    "btn7" : function() {return Session.get("btn7");},
    "btnMod" : function() {return Session.get("btnMod");},
    "btn6" : function() {return Session.get("btn6");},
    "btn5" : function() {return Session.get("btn5");},
    "btn4" : function() {return Session.get("btn4");},
    "btnMulti" : function() {return Session.get("btnMulti");},
    "btn3" : function() {return Session.get("btn3");},
    "btn2" : function() {return Session.get("btn2");},
    "btn1" : function() {return Session.get("btn1");},
    "btnSub" : function() {return Session.get("btnSub");},
    "btn0" : function() {return Session.get("btn0");},
    "btnCom" : function() {return Session.get("btnCom");},
    "btnEqual" : function() {return Session.get("btnEqual");},
    "btnAdd" : function() {return Session.get("btnAdd");},
    "btnDiv" : function() {return Session.get("btnDiv");},
    "btnPower": function(){return Session.get("btnPower");},
    "btnSqr": function(){return Session.get("btnSqr");},
  });


//Template event handlers
  Template.buttons.events({

    "click #btn9": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "9"); },

    "click #btn8": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "8"); },

   "click #btn7": function(){
     checkEqual();
      Session.set("result",Session.get("result") + "7"); },

    "click #btn6": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "6"); },

     "click #btn5": function(){
       checkEqual();
      Session.set("result",Session.get("result") + "5"); },

     "click #btn4": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "4"); },

     "click #btn3": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "3"); },

     "click #btn2": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "2"); },

     "click #btn1": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "1"); },

     "click #btn0": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "0"); },

     "click #btnCom": function(){
      checkEqual();
      Session.set("result",Session.get("result") + "."); },

  });


  Template.buttons.events({
    "click #btnAdd": function(event,template){

      if(Session.get("addPushed"))
      {
        Session.set("temp1", addFunction(Session.get("temp1"),Session.get("result")));
        Session.set("result","");
        Session.set("addPushed",true);
        return;
      }
      Session.set("temp1",Session.get("result"));
      Session.set("addPushed",true);
      Session.set("result","");
    },

    "click #btnSub":function(){

      if(Session.get("result") === "")
      {
        Session.set("result","-");
      }
      else
      {
        if(Session.get("subPushed"))
        {
          Session.set("temp1", subFunction(Session.get("temp1"),Session.get("result")));
          Session.set("result","");
          Session.set("subPushed",true);
          return;
        }

        Session.set("temp1",Session.get("result"));
        Session.set("subPushed",true);
        Session.set("result","");
      }

    },

    "click #btnSqr":function()
    {
      Session.set("sqrPushed",true);
      Session.set("result", sqrFunction(Session.get("result")));
      var result = Session.get("result");
      calculations.insert({Result: result, number: getTimeFunction()});
    },

    "click #btnMulti": function(){

      if(Session.get("multiPushed"))
      {
        Session.set("temp1", multiplyFunction(Session.get("temp1"), Session.get("result")));
        Session.set("result", "");
        Session.set("multiPushed", true);
        return;
      }

      Session.set("temp1", Session.get("result"));
      Session.set("multiPushed", true);
      Session.set("result", "");
    },

    "click #btnMod":function(){

      if(Session.get("modPushed"))
      {
        Session.set("temp1", modFunction(Session.get("temp1"),Session.get("result")));
        Session.set("result","");
        Session.set("modPushed",true);
        return;
      }

      Session.set("temp1",Session.get("result"));
      Session.set("modPushed",true);
      Session.set("result","");
    },

    "click #btnDiv": function(){

      if(Session.get("divPushed"))
      {
        Session.set("temp1", dividFunction(Session.get("temp1"), Session.get("result")));
        Session.set("result", "");
        Session.set("divPushed", true);
        return;
      }
      Session.set("temp1", Session.get("result"));
      Session.set("divPushed", true);
      Session.set("result", "");
    },

    "click #btnPower": function(){

      if(Session.get("powerPushed"))
      {
        Session.set("temp1", powerofFunction(Session.get("temp1"), Session.get("result")));
        Session.set("result","");
        Session.set("powerPushed",true);
        return;
      }

      Session.set("temp1", Session.get("result"));
      Session.set("powerPushed",true);
      Session.set("result","");
      console.log("temp1 i power: " + Session.get("temp1"));
    },

    "click #btnToBin":function(){
      Session.set("result",toBinaryFunction(Session.get("result")));
      Session.set("binPushed",true);
      var result = Session.get("result");
      calculations.insert({Result: result, number: getTimeFunction()});
    },

    "click #btnEqual": function(){

      Session.set("equalPushed",true);

      if(Session.get("addPushed"))
      {
        Session.set("result", addFunction(Session.get("temp1"),Session.get("result")));
        blankAllFunction();
      }
      else if(Session.get("subPushed"))
      {
        Session.set("result", subFunction(Session.get("temp1"),Session.get("result")));
        blankAllFunction();
      }
      else if(Session.get("divPushed"))
      {
        Session.set("result", dividFunction(Session.get("temp1"),Session.get("result")));
        blankAllFunction();
      }
      else if(Session.get("modPushed"))
      {
        Session.set("result", modFunction(Session.get("temp1"),Session.get("result")));
        blankAllFunction();
      }
      else if(Session.get("multiPushed"))
      {
        Session.set("result",multiplyFunction(Session.get("temp1"),Session.get("result")));
        blankAllFunction();
      }
      else if(Session.get("powerPushed"))
      {
        Session.set("result", powerofFunction(Session.get("temp1"),Session.get("result")));
        blankAllFunction();
      }
      else {
        alert("Please fill in a minimum of one digit, followed by an operator and a new digit");
      }
    }
  });


  Template.buttons.events({
    "click #btnEqual": function(){
      var result = Session.get("result");
      if(result === "")
      {
        return;
      }
      else
      {
        calculations.insert({Result: result, number: getTimeFunction()});
      }

    }
  });
