# crunchio-kata
#
# Code sample by Paul Hamill for Crunch (crunch.io)
#

Web UI, Javascript (Angular), CSS, and tests for Crunch Kata demo.

## Installing

Install Node.js and npm
[http://nodejs.org/](http://nodejs.org/)

    npm install

    bower install

### Build with Grunt

    npm install -g grunt-cli

    grunt

## Run locally

`grunt connect:app:keepalive` - Run local Web server http://localhost:8001 using `app/` as web root

The demo page URL can be opened in your browser:

[http://localhost:8001/demo/index.html](http://localhost:8001/demo/index.html)

## Testing

### Unit Tests

Unit tests are written in Jasmine and run with the Karma Test Runner.

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The unit tests are run using the npm script:

    npm test

Or using grunt:

    grunt karma

### End to end tests

End-to-end tests are written in Jasmine and run with
the Protractor End-to-End test runner.

* Protractor configurations are found at `test/protractor-*.js`
* end-to-end test cases are found in `test/e2e/*.js`

Run local Web server:

    grunt connect:app:keepalive

Run end to end tests:

    grunt protractor:local


 
