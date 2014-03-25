// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'recordView',
    'defaultView'
], function($, _, Backbone, RecordView, DefaultView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'homeRecord',
        },
    });

    var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:homeRecord', function (actions) {
        var recordView = new RecordView('content');
        recordView.render();
    }); 

    var defaultView = new DefaultView();
    defaultView.render();

    Backbone.history.start();
  };
  
  return { 
    initialize: initialize
  };

});
