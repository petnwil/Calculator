
    Session.set("btnDel", "btn-default");
    Session.set("btnHistory", "btn-default");
    Session.set("btnOn", "btn-default");

    Template.functionButtons.helpers({
        "btnDel" : function(){return Session.get("btnDel");},
        "btnHistory" : function(){return Session.get("btnHistory");},
        "btnOn" : function(){return Session.get("btnOn");}
    });

    Template.functionButtons.events({
        "click #btnDel": function(){
            console.log("Delete");
            Session.set("result","");
        },

        "click #btnOn": function(){
           console.log("BTNON");
           blankAllFunction();
           Session.set("result","");
        }

    });
