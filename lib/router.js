Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('/members', {
	name: 'membersList',
	onBeforeAction: function(){
		if (!Meteor.user()){
			this.render("dashboard")
		}
		else{
			this.next();
		}
	},
	waitOn: function(){
		
		return Meteor.subscribe("members");
	}
});
Router.route('/member/:_id',
	{
		template:'memberPage',
		name: 'memberPage',
		onBeforeAction: function(){
			if (!Meteor.user()){
				this.redirect("dashboard")
			}
			else{
				this.next();
			}
		},
		waitOn: function(){
			return [Meteor.subscribe("members", this.params._id),Meteor.subscribe("profilePics")];
		},
		data: function(){
			return Members.findOne({_id: this.params._id});
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
