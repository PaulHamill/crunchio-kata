'use strict';

angular.module('variableCatalog')
    .controller('VariableCatalogCtrl', ['$scope', '$window', '$resource', function($scope, $window, $resource) {

    $scope.graph = null;
    $scope.variables = null;

    $scope.varFile = $scope.varFile && $scope.varFile() || 'variables.json';
    $scope.orderFile = $scope.orderFile && $scope.orderFile() || 'order.json';

    // read order file
    $resource($scope.orderFile).get({}, function(response) {
        var resp = angular.fromJson(response);
        if (!resp.graph) return;
        var arr = [];
        for (var i in resp.graph) {
          var e = resp.graph[i];
          if (typeof e !== 'object') continue;
          for (var j in e) {
            if (typeof e[j] !== 'object') continue;
            arr.push({'name':j, 'value':e[j]});
          }
        }
        $scope.graph = arr;
    });

    // read variables file
    $resource($scope.varFile).get({}, function(response) {
        console.log(response);
        var resp = angular.fromJson(response);
        if (!resp.index) return;
        // $scope.variables = resp.index;
    });

}]);
