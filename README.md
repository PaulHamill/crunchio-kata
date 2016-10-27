# crunchio-kata
#
# Code sample by Paul Hamill for crunch.io
#

HTML layer, Angular modules, stylesheets, and automated test suites for crunch.io Kata code sample.

## Installing

Install Node.js and npm
[http://nodejs.org/](http://nodejs.org/)

npm install

### Build with Grunt

npm install -g grunt-cli
grunt

## Run locally

`grunt connect:app:keepalive` - using `app/` as the web root, at http://localhost:8001/

## Testing

### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], which we run with the [Karma Test
Runner][karma]. Karma configuration file to run them:

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The unit tests are run using the npm script:

    npm test

### End to end testing

End-to-end tests, again written in [Jasmine][jasmine]. These tests are run with
the [Protractor][protractor] End-to-End test runner.  It uses native events and has special features
for Angular applications.

* Protractor configurations are found at `test/protractor-*.js`
* the end-to-end test scenarios are found in `test/e2e/*.js`

    npm start
    npm run protractor-local


 
