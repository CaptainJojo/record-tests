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
        recordCollection: new RecordCollection(),

        events: {
            'click #followview': 'eachClick',
        },

        eachClick: function(e) {
            e.preventDefault();
            var target = e.target;

            var record = new RecordModel();
            record.setSelector(target);
            record.setEvent('click');

            this.recordCollection.add(record);
            record.save();

            console.log(recordCollection);
        },        

        initialize: function() {
            this.recordCollection.fetch();

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
