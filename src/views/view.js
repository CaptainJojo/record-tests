define([
    'jquery',
    'underscore',
    'backbone',
    'recordModel',
    'recordCollection',
    'recordView',
    'text!templates/view.html',
], function($, _, Backbone, RecordModel, RecordCollection, RecordView, ViewTemplate) {

    var DefaultView = Backbone.View.extend({
        el: $("#followview"),

        events: {
            'click': 'eachEvent',
            'change': 'eachEvent',
            'mouseover': 'eachEvent',
            'mousedown': 'eachEvent',
            'mouseenter': 'eachEvent',
            'mouseout': 'eachEvent',
            'mouseup': 'eachEvent',
            'dblclick': 'eachEvent',
            'select': 'eachEvent',
            'scroll': 'eachEvent',
            'resize': 'eachEvent',
            'keypress': 'eachEvent',
        },

        eachEvent: function(e) {
            var target = e.target;
            var recordCollection = new RecordCollection();
            recordCollection.fetch();   
            var recordModel = new RecordModel();
            recordModel.setSelector($(target).attr('id'));
            recordModel.setEvent(e.type);

            recordCollection.add(recordModel);
            recordModel.save();
            var recordView = new RecordView();
            recordView.render();
        }, 

        render: function() {
            this.$el.html(ViewTemplate);
        },
    });

    return DefaultView;
});
