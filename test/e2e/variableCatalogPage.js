/* jslint node:true */
'use strict';

describe('Variable Catalog Page :', function() {

    // resize browser
    browser.driver.manage().window().setSize(1280, 1024);

    beforeEach(function() {
        browser.get('demo/index.html');
        browser.waitForAngular();
    });

    describe('upon loading :', function() {

        var elt;

        beforeEach(function() {
            elt = element.all(by.css('div[variable-catalog]')).get(0);
        });

        it('contains variable catalog control', function() {
            expect(elt.count()).toBe(1);
        });

        it('contains 4 top level hierarchical elements', function() {
            elt.all(by.css('ul>li'))
               .then(function (items) {
                   expect(items.length).toBe(4);
               });
        });

    });

});
