'use strict';

angular.module('variableCatalog')
       .service('variablePositionService', ['$filter', function($filter) {
           this.getPosition = function(vars, key) {
               var i = 0;
               for (var v in vars) {
                   if (v == key) return i;
                   i++;
               }
               return -1; // not found
           };
       }]);
