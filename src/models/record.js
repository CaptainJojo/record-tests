define([
], function() {

    var RecordModel = Backbone.Model.extend({
        initialize: function Doc() {
            console.log('Record Constructor');
        },

        getId: function() {
            return this.get('id');
        },

        setId: function(value) {
            this.set({id: value});
        },

        getSelector: function() {
            return this.get('selector');
        },

        setSelector: function(value) {
            this.set({selector: value}, {validate: true});
        },

        getEvent: function() {
            return this.get('event');
        },

        setEvent: function(value) {
            this.set({event: value}, {validate: true});
        },
    });

    return RecordModel;
});
