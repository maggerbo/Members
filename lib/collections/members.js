Members = new Mongo.Collection("members");

Members.allow({
    insert: function(userId, doc){
        return !! userId;
    },
    update: function(userId, doc){
        return !! userId;
    }
});
Members.attachSchema(new SimpleSchema({
    firstName: {
        type: String,
        label: "Fornavn"
    },
    lastName: {
        type: String,
        label: "Efternavn"
    },
    address: {
        type: String,
        label: "Adresse",
        optional: true
    },
    postNo: {
        type: Number,
        label: "Postnr.",
        optional: true
    },
    city: {
        type: String,
        label: "By",
        optional: true
    },
    country: {
        type: String,
        label: "Land",
        autoform: {
            options: [
                {
                    label: "Danmark",
                    value: "Danmark"
                },
                {
                    label: "Tyskland",
                    value: "Tyskland"
                },
                {
                    label: "Norge",
                    value: "Norge"
                },
                {
                    label: "Sverige",
                    value: "Sverige"
                },
                {
                    label: "England",
                    value: "England"
                },
                {
                    label: "Holland",
                    value: "Holland"
                },
                {
                    label: "USA",
                    value: "USA"
                }

            ]
        }
    },
    phone: {
        type: Number,
        label: "Telefon",
        optional: true,
    },
    email:{
        type: String,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email
    },
    profilePic:{
        type: String,

    }
}));








EasySearch.createSearchIndex('members', {
    'field' : ['firstName', 'lastName', 'email', "address", "city", "phone", "country"],  // required, searchable field(s)
    'collection' : Members,          // required, Mongo Collection
    'limit' : 20                  // not required, default is 10
});