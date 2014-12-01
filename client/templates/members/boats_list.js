Template.boatsList.helpers({
	boats: function(){
		console.log("hmmm");
		return Boats.find({},{sort: {boatName:1}});
	}
})
Template.boatItem.helpers({
  owner: function() {
  	var owner = Owners.findOne(this.owner);
  	var firstName = owner.firstName;
    return firstName;
  }
});

Template.boatsList.rendered = function(){
	$('[data-toggle="tooltip"]').tooltip();
}
Template.boatsList.events({
	"click button": function(){
		$("#new-member-popup").modal();
  	}
})

