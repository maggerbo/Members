Template.boatsList.helpers({
	boats: function(){
		console.log("hmmm");
		return Boats.find({},{sort: {boatName:1}});
	}
})
Template.boatItem.helpers({
  member: function() {
  	var member = Members.findOne(this.member);
  	var firstName = member.firstName;
    return firstName;
  }
});

Template.boatsList.rendered = function(){
	$('[data-toggle="tooltip"]').tooltip();
}
Template.boatsList.events({
	"click button": function(){
		console.log("hallo")
		$("#new-member-popup").modal();
  	}
});

