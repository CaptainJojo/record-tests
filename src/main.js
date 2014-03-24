requirejs.config({
    paths: {
        jquery: '../lib/jquery/jquery.min',
        underscore: '../lib/underscore/underscore.min',
        backbone: '../lib/backbone/backbone.min',
        localstore: '../lib/backbone/backbone.localStorage',
        text: '../lib/require/text',
        templates: '../templates',
        recordModel: '../src/models/record',
        recordCollection: '../src/collections/records',
        recordView: '../src/views/index',
        defaultView: '../src/views/view',
    }
});

requirejs([
    // Load our app module and pass it to our definition function
    'app',
], function(App) {
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});
