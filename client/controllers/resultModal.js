Template.resultModal.helpers({
  calculations: function(){
    return historie.find({}, {sort: {number: -1},limit:10});
  }
});
