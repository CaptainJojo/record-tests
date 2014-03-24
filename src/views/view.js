define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/view.html',
], function($, _, Backbone, ViewTemplate) {

    var RecordView = Backbone.View.extend({
        el: $("#followview"),

        render: function() {
            this.$el.html(ViewTemplate);
            
            this.initialize();
        },
    });
});
