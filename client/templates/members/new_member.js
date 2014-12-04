Template.newMember.events({
    "click .saveBtn": function(){
        console.log("submitter")
        $("form").submit();
    }
});
