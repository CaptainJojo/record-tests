define([
    'jquery',
    'underscore',
    'backbone',
    'recordModel',
    'recordCollection',
    'text!templates/record/index.html'
], function($, _, Backbone, RecordModel, RecordCollection, RecordTemplate) {

    var RecordView = Backbone.View.extend({
        el: $("#content"),

        initialize: function() {
            var recordCollection =  new RecordCollection();
            recordCollection.fetch();

            var data = {
                records: recordCollection.models,
                _: _
            };

            var compiledTemplate = _.template(RecordTemplate, data);
            $("#records-list").html(compiledTemplate);
        },

        render: function() {
            this.$el.html(RecordTemplate);
            this.initialize();
        },
    });

    return RecordView;
});