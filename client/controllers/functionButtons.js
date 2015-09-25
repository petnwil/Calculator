Template.functionButtons.helpers({
  "btnDel" : function(){return Session.get("btnDel");},
  "btnOn" : function(){return Session.get("btnOn");}
});

Template.functionButtons.events({
  "click #btnDel": function(){
    Session.set("result","");
  },

  "click #btnOn": function(){
    blankAllFunction();
    Session.set("result","");
  }

});
