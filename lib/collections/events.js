Events = new Mongo.Collection("events");
Events.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Navn på begivenhed"
    },
    start: {
        type: Date,
        label: "Start dato"
    },
    end: {
        type: Date,
        label: "Slut dato",
        optional:true
    }
}));
Events.allow({
    insert: function(userId, doc){
        return !! userId;
    },
    update: function(userId, doc){
        return !! userId;
    },
    remove: function(userId, doc){
        return !! userId;
    }
})