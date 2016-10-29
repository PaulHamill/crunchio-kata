(function() {
    'use strict';

    var _ = require('lodash'),
        baseConfig = require('./protractor-base.conf').config;

    exports.config = _.assign(baseConfig, {
        'capabilities': {
            'browserName': 'chrome'
        },
        'specs': [
            'e2e/*.js'
        ]
    });
})();
