'use strict';

angular.module('variableCatalog')
    .directive('blockList', ['$templateCache', function($templateCache) {
        return {
            restrict: 'EA',
            transclude: true,
            replace: true,
            controller: 'VariableCatalogCtrl',
            template: $templateCache.get('template-variable-catalog'),
            scope: {
                file: '&'
            }
        };
    }]);
