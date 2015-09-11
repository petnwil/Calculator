
    Session.set("btnDel", "btn-danger");
    Session.set("btnHistory", "btn-info");
    Session.set("btnOn", "btn-success");
  
    Template.functionButtons.helpers({
        "btnDel" : function(){return Session.get("btnDel");},
        "btnHistory" : function(){return Session.get("btnHistory");},
        "btnOn" : function(){return Session.get("btnOn");}
    });
    
    Template.functionButtons.events({
        "click #btnDel": function(){
            console.log("Delte");
        },
        "click #btnHistory": function(){
            console.log("HISTORY");
        },
        "click #btnOn": function(){
           console.log("BTNON"); 
        }
        
    })
    




