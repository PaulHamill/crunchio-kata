# crunchio-kata
#
# Code sample by Paul Hamill for crunch.io
#

HTML layer, Angular modules, stylesheets, and automated test suites for crunch.io Kata code sample.

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

## Testing

### Running Unit Tests

Unit tests are written in Jasmine, which we run with the Karma Test
Runner.

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The unit tests are run using the npm script:

    npm test

Or using grunt:

    grunt karma

### End to end testing

End-to-end tests, written in Jasmine. These tests are run with
the Protractor End-to-End test runner.

* Protractor configurations are found at `test/protractor-*.js`
* the end-to-end test cases are found in `test/e2e/*.js`

    grunt connect:app:keepalive

    grunt protractor:local

 
