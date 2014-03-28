define([
    'recordModel',
    'text!templates/view.html',
], function(RecordModel, ViewTemplate) {

    var DefaultView = Backbone.View.extend({
        events: {
            'click': 'eachEvent',
            'change': 'eachEvent',
            'dblclick': 'eachEvent',
            'select': 'eachEvent',
            'scroll': 'eachEvent',
            'resize': 'eachEvent',
            'keypress': 'eachEvent',
        },

       initialize: function(options){
        this.vent = options.vent;
      },

        eachEvent: function(e) {
            var target = e.target;
            this.collection.fetch();   
            var recordModel = new RecordModel();
            recordModel.setSelector($(target).attr('id'));
            recordModel.setEvent(e.type);

            this.collection.add(recordModel);
            recordModel.save();
            this.vent.trigger("addCollection");
        }, 

        render: function() {
            this.$el.html(ViewTemplate);
        },
    });

    return DefaultView;
});
