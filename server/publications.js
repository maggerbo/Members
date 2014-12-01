Meteor.publish("boats", function(boatId){
	if (boatId){
		//Når jeg gør sådan her hvorfor kan jeg så få alle både i clienten selvom jeg er inde på et id?
		return Boats.find({_id: boatId});
	}
	else{
		return Boats.find();	
	}
	
});
Meteor.publish("owners", function(){
	return Owners.find();
});
Meteor.publish("images", function(){
	return Images.find();
});

Meteor.publish("events", function(){
	return Events.find();
});