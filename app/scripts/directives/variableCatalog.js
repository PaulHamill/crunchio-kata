'use strict';

angular.module('variableCatalog')
    .directive('variableCatalog', ['$templateCache', function($templateCache) {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            controller: 'VariableCatalogCtrl',
            template: $templateCache.get('template-variable-catalog'),
            scope: {
                varFile: '&',
                orderFile: '&'
            }
        };
    }]);
