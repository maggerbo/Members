Template.calendar.helpers({
    options: function(){
        return {
            weekends: true,
            header: {
                right: "month, agendaWeek, today, prev, next"
            },
            firstDay: 1,
            events: function (start, end, timezone, callback) {
                var eventsFromCollection = Events.find().fetch();
                console.log(eventsFromCollection[0]);
                var events = eventsFromCollection;
                callback(events)
            },
            eventClick: function(calEvent, jsEvent, view){
                console.log(calEvent);
                console.log(calEvent);
                //Events.remove(calEvent._id)
            },
            dayClick: function(date, jsEvent, view){
                console.log(date)
                $("#newEvent").modal("show")
                $("#newEventForm input[name='start']").val(date.format("YYYY-MM-DD"))

                console.log($("#newEventForm input[name='start']"))

            }
        }
    }
});
Template.calendar.events({
    "click #createEvent": function(event, template){
        $("#newEvent").modal("show")
    },
    "click .saveBtn": function(event, template){
        $("#newEventForm").submit();
    }
})