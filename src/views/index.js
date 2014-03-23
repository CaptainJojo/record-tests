define([
    'jquery',
    'underscore',
    'backbone',
    'recordModel',
    'recordCollection',
    'text!templates/record/index.html',
    'text!templates/view.html',
], function($, _, Backbone, RecordModel, RecordCollection, RecordTemplate, ViewTemplate) {

    var RecordView = Backbone.View.extend({
        el: $("#content"),

        events: {
            'click #followview': 'eachClick',
        },

        eachClick: function(e) {
            e.preventDefault();
            var target = e.target;

            var record = new RecordModel();
            record.setSelector(target);
            record.setEvent('click');

            var recordCollection = new RecordCollection();
            recordCollection.fetch();
            recordCollection.add(record);
            record.save();

            console.log(recordCollection);
        },        

        initialize: function() {
            var recordCollection = new RecordCollection();
            recordCollection.fetch();

            var data = {
                records: this.recordCollection.models,
                _: _
            };

            var compiledTemplate = _.template(RecordTemplate, data);
            this.$el.html(compiledTemplate);
            this.$('#followview').html(ViewTemplate);
        },

        render: function() {
            this.$el.html(RecordTemplate);
            
            this.initialize();
        },
    });

    return RecordView;
});
