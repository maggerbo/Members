
Template.memberPage.events({
	"click .boat-name": function(){
		console.log(this.boatName)
		$(".edit-name").val(this.boatName);
		$(".edit-name").show();
		$(".boat-name").hide();
	}
})
Template.imageForm.events({
	"change .picture": function(event, template){

		FS.Utility.eachFile(event, function(file) {
		      ProfilePics.insert(file, function (err, fileObj) {
		        Members.update({_id: template.data._id}, {$set: {profilePic: fileObj._id}})
		      });
		    });
		//for (var i = 0, ln=files.length; i < ln; i++){
		//	ProfilePics.insert(files[i], function(err, fileObj){
		//		console.log(fileObj + err)
		//	})
		//}
		
	}
})

Template.imageView.helpers({
  profilePics: function () {
	  return ProfilePics.find({_id:this.profilePic}); // Where Images is an FS.Collection instance
  }
});

AutoForm.hooks({
	editBoatName:{
		onSuccess: function(operation,result,template){
			console.log(template);
			$(".edit-name").hide();
			$(".boat-name").show();
		}
	}
})