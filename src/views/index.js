define([
    'text!templates/record/index.html',
], function(RecordTemplate) {

    var RecordView = Backbone.View.extend({
        initialize: function(options) {
            this.vent = options.vent;

            this.vent.bind("addCollection", _.bind(this.render, this));
        },

        render: function() {
            this.collection.fetch();

            var data = {
                records: this.collection.models,
                _: _
            };
            var compiledTemplate = _.template(RecordTemplate, data);            
            this.$el.html(compiledTemplate);
        },
    });

    return RecordView;
});
