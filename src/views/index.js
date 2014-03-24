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
            var recordCollection = new RecordCollection();
            recordCollection.fetch();
            var recordModel = new RecordModel();
            recordModel.setSelector($(target).attr('id'));
            recordModel.setEvent('click');

            recordCollection.add(recordModel);
            recordModel.save();

            this.initialize();
        },        

        initialize: function() {
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
        },
    });

    return RecordView;
});
