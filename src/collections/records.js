define([
    'jquery',
    'underscore',
    'backbone',
    'localstore',
    'recordModel'
], function($, _, Backbone, localstore, RecordModel){
    var recordCollection = Backbone.Collection.extend({
        model: RecordModel, 

        initialize: function()
        {
            this.localStorage = new Store("records");
 	        console.log('Record collection Constructor');
        }
    });

    return recordCollection;
});
