Template.history.helpers({
  calculations: function(){
    return historie.find({}, {sort: {_id: 1}});
  }
});
