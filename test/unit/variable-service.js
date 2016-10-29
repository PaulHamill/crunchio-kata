'use strict';

describe('variableService', function() {

    var variableService, index;

    beforeEach(function() {

        module('variableCatalog');

        index = {
           "123abc": {
               "name": "Empty"
           },
           "456xyz": {
               "name": "Example"
           }
        };

        inject(function (_variableService_) {
           variableService = _variableService_;
        });

    });

    it('getVariable with valid key', function() {
        expect(variableService.getVariable(index, '456xyz'))
                              .toEqual({"name": "Example"});
    });

    it('getVariable with missing key', function() {
        expect(variableService.getVariable(index, 'x')).toEqual(null);
    });

});
