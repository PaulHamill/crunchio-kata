'use strict';

describe('variableCatalog directive', function() {

	var scope, element, compile,
	    defaultTemplate =
          '<div variable-catalog ' +
          '  order-file="order.json" ' +
          '  var-file="variables.json" ' +
          '></div>';

	function createDirective(template) {
		// Create directive
		var el = compile(template || defaultTemplate)(scope);

		// Trigger watchers
		scope.$apply();

		return el;
	}

	beforeEach(function() {

    module('variableCatalog');

		inject(function($rootScope, $compile, $httpBackend) {
			scope = $rootScope.$new();
			compile = $compile;
      // expect call to GET variables.json, return empty object
      $httpBackend.expectGET('variables.json')
                  .respond({});
      // expect call to GET order.json, return empty object
      $httpBackend.expectGET('order.json')
                  .respond({});
		});

		element = createDirective();
    // scope.$$childHead is expected to be VariableCatalogCtrl scope
		scope = element.scope().$$childHead;
	});

	it('should set scope attributes', function() {
    expect(scope).not.toBe(null);
    expect(scope.orderFile).toBe('order.json');
    expect(scope.varFile).toBe('variables.json');
    expect(scope.graph).toBe(null);
	});

});
