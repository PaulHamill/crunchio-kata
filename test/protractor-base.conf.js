/**
 * import this base config with:
 *
 * var config = require('./protractor-base.conf').config;
 *
 * ...then add specific settings as needed.
 **/
(function() {
    'use strict';

    exports.config = {

        'allScriptsTimeout': 11000,

        'baseUrl': 'http://localhost:8001/',

        'framework': 'jasmine2',

        'jasmineNodeOpts': {
            'showColors': true,
            'defaultTimeoutInterval': 60000
        }
    };
})();
