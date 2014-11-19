Boats = new Mongo.Collection("boats");
Boats.allow({
  insert: function(userId, doc){
    return !! userId;
  },
  update: function(userId, doc){
    return true;
  }
})
Boats.attachSchema(new SimpleSchema({
  boatName: {
    type: String,
    label: "Bådens navn"
  },
  sailNo: {
    type: String,
    label: "Sejlnummer",
    optional: false
  },
  harbour: {
    type: String,
    label: "Hjemhavn"
  },
  boatPic: {
    type: String,
  },
  owner: {
      type: String,
      label:"Ejer",
      autoform: {
        options: function () {
          return Owners.find().map(function (c) {
            return {label: c.firstName, value: c._id};
          });
        }
      }
    },
  
  boatType: {
    type: String,
    label: "Bådtype",
    optional: true,
    autoform: {
             options: [
                {
                   label: "Dinette",
                   value: "Dinette"
                },
                {
                   label: "Racing",
                   value: "Racing"
                }
             ]
  	}
  }
}));
EasySearch.createSearchIndex('boats', {
    'field' : ['boatName', 'sailNo', 'harbour', "boatType"],  // required, searchable field(s)
    'collection' : Boats,          // required, Mongo Collection
    'limit' : 20                  // not required, default is 10
});

// OR (Both do the exact same thing)

//Cars.initEasySearch(['name', 'price'], {
 //   'limit' : 20
//});