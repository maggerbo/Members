ProfilePics = new FS.Collection("profilePics", {
	stores: [new FS.Store.FileSystem("profilePics", {path: "~/uploads/"})]
})
ProfilePics.allow({
  insert: function(userId, doc){
    return !! userId;
  },
  update: function(userId, doc){
  	return !! userId;
  },
  download: function(userId, doc){
  	return !! userId;
  }

})