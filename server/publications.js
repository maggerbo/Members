Meteor.publish("boats", function(boatId){
	if (boatId){
		//Når jeg gør sådan her hvorfor kan jeg så få alle både i clienten selvom jeg er inde på et id?
		return Boats.find({_id: boatId});
	}
	else{
		return Boats.find();	
	}
	
});
Meteor.publish("members", function(memberId){
	if (memberId){
		return Members.find({_id:memberId});
	}
	else{
		return Members.find();
	}

});
Meteor.publish("profilePics", function(){
	return ProfilePics.find();
});

Meteor.publish("events", function(){
	return Events.find();
});