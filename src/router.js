// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'recordView'
], function($, _, Backbone, RecordView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'homeRecord',
        },
    });

    var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:homeRecord', function (actions) {
        var recordView = new RecordView();
        recordView.render();
    }); 

    Backbone.history.start();
  };
  
  return { 
    initialize: initialize
  };

});
