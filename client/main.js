

Template.newBoat.events({
    "click .save": function(){
        console.log("herinde")
        Boats.insert(
        {
        	boatName: $("#boatName").val()

        })
        $("#boatName").val();
        $("#new-member-popup").modal("hide")
    }
})
