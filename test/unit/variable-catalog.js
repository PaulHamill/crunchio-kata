'use strict';

describe('variableCatalog', function() {

    beforeEach(function() {
        module('variableCatalog');
    });

    describe('variableCatalog controller', function() {
        var scope,
            ctrl,
            location;

        beforeEach(function() {

            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('VariableCatalog',
                    { $scope: scope,
                      $location: location });
            });

        });

        it('should be defined', function() {
           expect(ctrl).toBeDefined();
        });

        it('should set catalog to null by default', function() {
            expect(scope.catalog).toBe(null);
        });

    });

});
