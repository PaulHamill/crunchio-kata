'use strict';

describe('variablePositionService', function() {

    var variablePositionService, index;

    beforeEach(function() {

        module('variableCatalog');

        index = {
           "123abc": {},
           "456xyz": {}
        };

        inject(function (_variablePositionService_) {
           variablePositionService = _variablePositionService_;
        });

    });

    it('getPosition of valid key', function() {
        expect(variablePositionService.getPosition(index, '456xyz')).toEqual(1);
    });

    it('getPosition of missing key', function() {
        expect(variablePositionService.getPosition(index, 'x')).toEqual(-1);
    });

});
