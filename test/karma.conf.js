module.exports = function (config){
    'use strict';

    config.set({
        'basePath' : '../',

        'browsers' : ['Chrome', 'Firefox'],

        'colors': true,

        'coverageReporter': {
            'reporters': [
                {
                    'type': 'html',
                    'dir': 'coverage/'
                },
                {
                    'type': 'text'
                }
            ]
        },

        'files' : [
            'app/vendor/jquery/dist/jquery.js',
            'app/vendor/angular/angular.js',
            'app/vendor/angular-bootstrap/dist/ui-bootstrap-custom-tpls-0.11.0.js',
            'app/vendor/angular-resource/angular-resource.js',
            'app/vendor/angular-route/angular-route.js',
            'app/vendor/x2js/xml2json.js',
            'app/vendor/angular-x2js/src/x2js.js',
            'app/scripts/**/*.js',
            'app/vendor/angular-mocks/angular-mocks.js',
            'test/unit/**/*.js'
        ],

        'frameworks': ['jasmine'],

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        'logLevel': config.LOG_INFO,

        'preprocessors' : {
            'app/scripts/**/*.js': ['coverage']
        },

        'reporters' : ['progress', 'coverage']

    });
};
