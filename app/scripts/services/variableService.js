'use strict';

angular.module('variableCatalog')
       .service('variableService', function() {
           this.getVariable = function(vars, key) {
               for (var v in vars) {
                   if (v == key) return vars[v];
               }
               return null; // not found
           };
       });
