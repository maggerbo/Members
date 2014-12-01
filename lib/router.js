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
		
		return [Meteor.subscribe("boats"), Meteor.subscribe("members")];
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
			return [Meteor.subscribe("boats", this.params._id), Meteor.subscribe("members")];
		},
		data: function(){
			return Boats.findOne({_id: this.params._id});
		}
	});
Router.route('/', {name: 'dashboard'});

Router.route("/calendar/",
	{
		name: "calendar",
		waitOn: function(){
			Tracker.autorun(function (computation) {
				var events = Events.find().fetch();
				$(".fc").fullCalendar( 'refetchEvents' );
			});
			return Meteor.subscribe("events")
		}
	});
