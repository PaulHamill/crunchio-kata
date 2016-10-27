/* global console */

'use strict';

angular.module('variableCatalog')
    .controller('VariableCatalogCtrl', ['$scope', '$resource', function($scope, $resource) {

    $scope.graph = null;
    $scope.variables = null;

    $scope.varFile = $scope.varFile && $scope.varFile() || 'variables.json';
    $scope.orderFile = $scope.orderFile && $scope.orderFile() || 'order.json';

    // read order file
    $resource($scope.orderFile).get({}, function(response) {
        console.log(response);
        var resp = angular.fromJson(response);
        if (!resp.graph) return;
        // parse JSON structure 'graph'
        var arr = [];
        for (var i in resp.graph) {
          var e = resp.graph[i];
          if (typeof e !== 'object') continue;
          for (var j in e) {
            if (typeof e[j] !== 'object') continue;
            var arr2 = [];
            for (var k in e[j]) {
              var e2 = e[j][k];
              if (Object.keys(e2).length == 1) {
                arr2.push({'name': Object.keys(e2)[0],
                           'value': e2[Object.keys(e2)[0]]});
              } else {
                arr2.push(e2);
              }
            }
            arr.push({'name':j, 'value':arr2});
            // arr.push({'name':j, 'value':arr2});
          }
        }
        $scope.graph = arr;
    });

    // read variables file
    $resource($scope.varFile).get({}, function(response) {
        // console.log(response);
        var resp = angular.fromJson(response);
        if (!resp.index) return;
        // $scope.variables = resp.index;
    });

}]);
