/* global console */

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
                orderFile: '&',
                getVariable: '&'
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
    })
    .directive('catalogVar', ['$parse', function($parse) {
        return {
            require: '^variableCatalog',
            restrict: 'A',
            link: function(_scope, _element, _attrs) {
                var varId = _attrs.catalogVar,
                    v = _scope.getVariable(varId);
                if (v && v.name) {
                    _element.text(v.name);
                } else {
                    console.log('Error: variable missing/invalid: '+varId);
                    _element.remove();
                }
            }
        };
    }]);
