define([
    'localstore',
    'recordModel'
], function(localstore, RecordModel){
    var RecordCollection = Backbone.Collection.extend({
        model: RecordModel, 
        localStorage: new Backbone.LocalStorage("saving"),

        initialize: function()
        {
 	        console.log('Record collection Constructor');
        }
    });

    return RecordCollection;
});
