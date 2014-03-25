var tests = [];

for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    inlineText: true,
    baseUrl: '/base',
    waitSeconds: 10,
    paths: {
        query: 'lib/jquery/jquery.min',
        underscore: 'lib/underscore/underscore.min',
        backbone: 'lib/backbone/backbone.min',
        localstore: 'lib/backbone/backbone.localStorage',
        text: 'lib/require/text',
        templates: 'templates',
        recordModel: 'src/models/record',
        recordCollection: 'src/collections/records',
        recordView: 'src/views/index',
        defaultView: 'src/views/view',
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'text' : {
            exports : 'text'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});