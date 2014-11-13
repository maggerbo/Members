Template.boatPage.helpers({
	owner: function(){
		var owner = Owners.findOne(this.owner)
		return owner;
	}
})