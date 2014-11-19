Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('/members', {
	name: 'boatsList',
	onBeforeAction: function(){
		if (!Meteor.user()){
			this.render("dashboard")
		}
		else{
			this.next();
		}
	},
	waitOn: function(){
		return [Meteor.subscribe("boats"), Meteor.subscribe("owners")];
	}
});
Router.route('/boat/:_id', 
	{
		template:'boatPage', 
		name: 'boatPage',
		onBeforeAction: function(){
			if (!Meteor.user()){
				this.redirect("dashboard")
			}
			else{
				this.next();
			}
		},
		waitOn: function(){
			return [Meteor.subscribe("boats"), Meteor.subscribe("owners"), Meteor.subscribe("images")];
		},
		data: function(){
			return Boats.findOne({_id: this.params._id});
		}
	});
Router.route('/', {name: 'dashboard'});
