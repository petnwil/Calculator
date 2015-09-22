Session.set("addPushed",false);
Session.set("subPushed",false);
Session.set("multiPushed", false);
Session.set("divPushed", false);
Session.set("modPushed", false);
Session.set("powerPushed",false);
Session.set("sqrPushed",false); //do we need this??
Session.set("equalPushed",false);


blankAllFunction = function(){
  Session.set("temp1","");
  Session.set("addPushed",false);
  Session.set("subPushed",false);
  Session.set("multiPushed",false);
  Session.set("divPushed",false);
  Session.set("modPushed",false);
  Session.set("powerPushed",false);
  Session.set("sqrPushed",false); //do we need this??
};

addFunction = function(temp1,temp2){
  temp1 = parseFloat(temp1);
  console.log(temp1 + " temp1 i add");
  temp2 = parseFloat(temp2);
  console.log(temp2 + " temp2 i add");
  temp1 = (temp1 + temp2);
  console.log(temp1 + " temp1 i add total");
  return temp1.toFixed(2);
};

subFunction = function(temp1,temp2){
  temp1 = parseFloat(temp1);
  console.log(temp1 + " temp1 i sub");
  temp2 = parseFloat(temp2);
  console.log(temp2 + " temp2 i sub");
  temp1 = (temp1-temp2);
  console.log(temp1 + "temp1 i sub total");
  return temp1.toFixed(2);
};

multiplyFunction = function(temp1, temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp2 = temp1*temp2;
  return temp2.toFixed(2);
};

dividFunction = function(temp1, temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp2 = temp1/temp2;
  return temp2.toFixed(2);
};

modFunction = function(temp1,temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp = temp1 % temp2;
  return temp.toFixed(2);
};

powerofFunction = function(temp1,temp2){
  parseFloat(temp1);
  parseFloat(temp2);
  temp = Math.pow(temp1,temp2);
  return temp.toFixed(2);
};

sqrFunction = function(temp1){
  parseFloat(temp1);
  temp = Math.sqrt(temp1);
  return temp.toFixed(2);
};

toBinaryFunction = function(temp1){
  temp11 = parseInt(temp1);
  //temp22 = parseFloat(temp1);
  console.log(temp11);
  //console.log(temp22);
  return temp1.toString(2); //2 is the radix, the base of the input
};

//Is this in use??
blankResult = function(){
  Session.set("result","");
};


function checkEqual(){
  if(Session.get("equalPushed"))
  {
    Session.set("result", "");
    Session.set("equalPushed", false);
  }
}


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
    "btnBlank" : function() {return Session.get("btnBlank");},
  });

  Template.buttons.events({

    "click #btn9": function(){ checkEqual();
      Session.set("result",Session.get("result") + "9"); },

    "click #btn8": function(){ checkEqual();
      Session.set("result",Session.get("result") + "8"); },

   "click #btn7": function(){ checkEqual();
      Session.set("result",Session.get("result") + "7"); },

    "click #btn6": function(){ checkEqual();
      Session.set("result",Session.get("result") + "6"); },

     "click #btn5": function(){ checkEqual();
      Session.set("result",Session.get("result") + "5"); },

     "click #btn4": function(){ checkEqual();
      Session.set("result",Session.get("result") + "4"); },

     "click #btn3": function(){ checkEqual();
      Session.set("result",Session.get("result") + "3"); },

     "click #btn2": function(){ checkEqual();
      Session.set("result",Session.get("result") + "2"); },

     "click #btn1": function(){ checkEqual();
      Session.set("result",Session.get("result") + "1"); },

     "click #btn0": function(){ checkEqual();
      Session.set("result",Session.get("result") + "0"); },

     "click #btnCom": function(){ checkEqual();
      Session.set("result",Session.get("result") + "."); },

  }); // end of events


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

"click #btnSqr":function(){
  Session.set("result", sqrFunction(Session.get("result")));
},

"click #btnMulti": function(){

    if(Session.get("multiPushed")){
      Session.set("temp1", multiplyFunction(Session.get("temp1"), Session.get("result")));
      Session.set("result", "");
      Session.set("multiPushed", true);
      console.log("temp1 funksjonen: " + Session.get("temp1"));
      return;
    }
    Session.set("temp1", Session.get("result"));
    Session.set("multiPushed", true);
    Session.set("result", "");
    console.log("temp1: " + Session.get("temp1"));
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
      console.log("temp1 divison: " + Session.get("temp1"));
      return;
    }
    Session.set("temp1", Session.get("result"));
    Session.set("divPushed", true);
    Session.set("result", "");
    console.log("temp1: " + Session.get("temp1"));
  },

  "click #btnPower": function(){

    if(Session.get("powerPushed"))
    {
      Session.set("temp1", powerofFunction(Session.get("temp1"), Session.get("result")));
      Session.set("result","");
      Session.set("powerPushed",true);
      console.log("temp1 i power etter utregning: " + Session.get("temp1"));
      return;
    }

    Session.set("temp1", Session.get("result"));
    Session.set("powerPushed",true);
    Session.set("result","");
    console.log("temp1 i power: " + Session.get("temp1"));
  },

"click #btnToBin":function(){
  Session.set("result",toBinaryFunction(Session.get("result")));
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
    alert("test");
  }

}

});

Template.buttons.events({
  "click #btnEqual": function(){
    var result = Session.get("result");
    console.log(result);
     historie.insert({Result: result});
     console.log("satt inn i database?");
  }
});
