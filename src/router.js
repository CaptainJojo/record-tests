// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'recordView',
    'defaultView', 
    'recordCollection',
    'recordModel',
], function($, _, Backbone, RecordView, DefaultView, RecordCollection, RecordModel) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'homeRecord',
        },
    });

    var initialize = function(){

    var app_router = new AppRouter;

    var vent = _.extend({}, Backbone.Events);

    var defaultView = new DefaultView({el: '#followview', 'collection': new RecordCollection(), 'vent': vent});
    defaultView.render();

    app_router.on('route:homeRecord', function (actions) {
        var recordView = new RecordView({el: '#content',  'collection': new RecordCollection(), 'vent': vent });
        recordView.render();
    }); 

    Backbone.history.start();
  };    
  
  return { 
    initialize: initialize
  };

});
