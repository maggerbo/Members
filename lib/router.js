Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/members', {name: 'boatsList'});
Router.route('/boat/:_id', 
	{
		template:'boatPage', 
		name: 'boatPage',
		data: function(){
			return Boats.findOne({_id: this.params._id});
		}
	});
Router.route('/', {name: 'dashboard'});
