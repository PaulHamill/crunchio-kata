module.exports = function (config){
    'use strict';

    config.set({

        'basePath' : '../',

        'browsers' : ['Chrome'],
        // 'browsers' : ['Chrome', 'Firefox'],

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
            'app/vendor/angular/angular.js',
            'app/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
            'app/vendor/angular-resource/angular-resource.js',
            'app/vendor/angular-mocks/angular-mocks.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
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
