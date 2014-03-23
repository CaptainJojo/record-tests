define([
    'jquery',
    'underscore',
    'backbone',
    'recordModel',
    'recordCollection',
    'text!templates/record/index.html'
], function($, _, Backbone, RecordModel, RecordCollection, RecordTemplate) {

    var RecordView = Backbone.View.extend({
        url: '',
        el: $("#content"),

        events: {
            'submit form': 'sendUrl'
        },

        sendUrl: function(e) {
            e.preventDefault();
            this.url = this.$('#url').val();
            this.initialize();
        },

        initialize: function() {
            var recordCollection =  new RecordCollection();
            recordCollection.fetch();

            var data = {
                records: recordCollection.models,
                url_iframe: this.url, 
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