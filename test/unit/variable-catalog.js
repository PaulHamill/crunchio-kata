'use strict';

describe('variableCatalog', function() {

    beforeEach(function() {
        module('variableCatalog');
    });

    describe('variableCatalog controller', function() {
        var scope,
            ctrl;

        beforeEach(function() {

            inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('VariableCatalogCtrl', { $scope: scope });
            });

        });

        it('should be defined', function() {
           expect(ctrl).toBeDefined();
        });

        it('should set graph to null by default', function() {
            expect(scope.graph).toBe(null);
        });

    });

});
