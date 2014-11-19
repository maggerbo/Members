Template.boatPage.helpers({
	owner: function(){
		var owner = Owners.findOne(this.owner)
		console.log(owner._id)
		return owner;
	}
})

Template.imageForm.events({
	"change .picture": function(event, template){
		console.log(Template.boatPage.data)
		var files = event.target.files;
		FS.Utility.eachFile(event, function(file) {
		      Images.insert(file, function (err, fileObj) {
		        Boats.update({_id: template.data._id}, {$set: {boatPic: fileObj._id}})
		      });
		    });
		// for (var i = 0, ln=files.length; i < ln; i++){
		// 	Images.insert(files[i], function(err, fileObj){
		// 		console.log(fileObj + err)
		// 	})	
		// }
		
	}
})

Template.imageView.helpers({
  images: function () {
  	console.log(this.boatName)
    return Images.find({_id:this.boatPic}); // Where Images is an FS.Collection instance
  }
});