define([
    'jquery',
    'underscore',
    'backbone',
    'recordCollection',
    'text!templates/record/index.html',
], function($, _, Backbone, RecordCollection, RecordTemplate) {

    var RecordView = Backbone.View.extend({
        el: $("#content"),
    
        init: function() {
            var recordCollection = new RecordCollection();
            recordCollection.fetch();

            var data = {
                records: recordCollection.models,
                _: _
            };

            var compiledTemplate = _.template(RecordTemplate, data);
            this.$el.html(compiledTemplate);
        },

        render: function() {
            this.$el.html(RecordTemplate);
            this.init();
        },
    });

    return RecordView;
});
