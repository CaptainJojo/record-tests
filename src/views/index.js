define([
    'jquery',
    'underscore',
    'backbone',
    'recordModel',
    'recordCollection',
    'text!templates/record/index.html'
], function($, _, Backbone, RecordModel, RecordCollection, RecordTemplate) {

    var RecordView = Backbone.View.extend({
        url: 'http://backbonejs.org',
        el: $("#content"),
        recordCollection: new RecordCollection(),

        events: {
            'submit form': 'sendUrl',
            'click #followiframe': 'eachClick',
        },

        eachClick: function(e) {
            e.preventDefault();
            var target = e.target();

            var record = new RecordModel();
            record.setSelector(target);
            record.setEvent('click');

            this.recordCollection.add(record);
            record.save();

            console.log(this.recordCollection);
        },        

        sendUrl: function(e) {
            e.preventDefault();
            this.url = this.$('#url').val();
            this.initialize();
        },

        initialize: function() {
            this.recordCollection.fetch();

            var data = {
                records: this.recordCollection.models,
                url_iframe: this.url, 
                _: _
            };

            var compiledTemplate = _.template(RecordTemplate, data);
            this.$el.html(compiledTemplate);
        },

        render: function() {
            this.$el.html(RecordTemplate);
            this.initialize();
        },
    });

    return RecordView;
});
