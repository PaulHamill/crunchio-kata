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
    }])
    .directive('catalogCategory', function() {
        return {
            require: '^variableCatalog',
            restrict: 'A',
            link: function(_scope, _element, _attrs) {
                _element.bind('click', function(evt) {
                    _element.parent().toggleClass('open');
                });
            }
        };
    });
