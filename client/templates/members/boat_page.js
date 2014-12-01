Template.boatPage.helpers({
	owner: function(){
		var owner = Owners.findOne(this.owner)
		console.log(owner._id)
		return owner;
	}
})
Template.boatPage.events({
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
	  return Images.find({_id:this.boatPic}); // Where Images is an FS.Collection instance
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