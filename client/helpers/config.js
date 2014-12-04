AutoForm.addHooks(["insertMemberForm"],
    {
        beginSubmit: function(formId, template){
            var btn = template.$(".saveBtn");
            btn[0].disabled = true;
            btn.text(btn.data("loading"));
        },
        endSubmit: function(formId, template){
            var btn = template.$(".saveBtn");
            btn[0].disabled = false;
            btn.text(btn.data("initial"));
        },
        onSuccess: function(operation, result, template) {
            $("#new-member-popup").modal("hide");
        }

    });