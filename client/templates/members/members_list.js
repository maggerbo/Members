Template.membersList.events({
    "click button": function(){
        $("#new-member-popup").modal();
    }
});
Template.membersList.rendered = function(){
    $('[data-toggle="tooltip"]').tooltip();
};

Template.membersList.helpers({
    members: function(){
        return Members.find({},{sort: {firstName:1}});
    }
});