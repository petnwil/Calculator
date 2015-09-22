Template.history.helpers({
  calculations: function(){
    return historie.find({}, {sort: {number: -1},limit:10});
     //return historie.find().limit(10);
    // return historie.find().limit(10).sort({_id: 1});
    // db.bios.find().limit( 5 ).sort( { name: 1 } )
    //_id.toString().substring(0,8)
  }
});
