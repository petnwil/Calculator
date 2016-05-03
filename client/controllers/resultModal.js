Template.resultModal.helpers({
  calculations: function(){
    return calculations.find({}, {sort: {number: -1},limit:10});
  }
});
