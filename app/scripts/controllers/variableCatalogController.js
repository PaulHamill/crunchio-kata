'use strict';

angular.module('variableCatalog')
    .controller('VariableCatalogCtrl', ['$scope', '$window', '$document', '$sce', '$filter', function($scope, $window, $document, $sce, $filter) {

        // read file containing variables
        $scope.getData = function(filename) {
            var file = filename + ".json";
/*
            DataService.query({
                filename: dataFile
            }, function(data) {
                var its = [];
                // read nested JSON and flatten into item array
                if (data.countries) {
                    try {
                        $.each(data.countries, function(kCountry, vCountry) {
                            $.each(vCountry, function(kLocation, vLocation) {
                                var item = {
                                    "country": kCountry,
                                    "region": (vLocation.region ? vLocation.region : 'all'),
                                    "title": kLocation,
                                    "blocks": []
                                };
                                $.each(vLocation.blocks, function(k, v) {
                                    item.blocks.push(v);
                                });
                                if (item.blocks.length > 0) its.push(item);
                            });
                        });
                    } catch (e) {
                        // JSON parse error
                        applicationLoggingService.error("Invalid block list JSON", e);
                    }
                }

                $scope.items = its;
                $scope.filterItems();
            }, function(err) {
                // error reading file
                $scope.items = [];
                $scope.filteredItems = [];
                applicationLoggingService.error("Error reading block list JSON", err);
            });
*/
        };

        $scope.renderHtml = function(text) {
            return $sce.trustAsHtml(text);
        };

        $scope.items = [];

        $scope.file = $scope.file && $scope.file() || 'variables.json';

/*
        // read filter configuration (countries & regions) from file
        DataService.query({
            filename: $scope.filters
        }, function(data) {
            $scope.filterCountries = data.countries;
            $scope.showRegions();
        });

        // read list of month files from file
        $scope.months = [];
        DataService.query({
            filename: $scope.files,
            isArray: true,
            transformJson: VariableCatalogDatesModel
        }, function(months) {
            // get latest month that has data
            angular.forEach(months, function(m) {
                var s = m.substr(0,3)+' 1,'+m.substr(3,4);
                var dt = Date.parse(s);
                if (!isNaN(dt).valueOf() &&
                    (latestMonth === null ||
                     dt.valueOf() > latestMonth.valueOf())) {
                    latestMonth = m;
                }
            });

            $scope.months = months;

            // if activeMonth is not set, set it to latest month
            if (latestMonth !== null) {
                // broadcast maxMonth to child scopes (e.g. datepicker)
                $scope.$broadcast('maxMonth', latestMonth);
                // if activeMonth is not set, set it to latest month
                if (!($scope.activeMonth)) {
                    $scope.activeMonth = latestMonth;
                }
            }
            // get data for activeMonth
            if ($scope.activeMonth) $scope.getData($scope.activeMonth);

            // if no latest month, display current month
            if (months.length === 0) $scope.showCurrentMonth();
        }, function(err) {
            // nonexistent file or invalid JSON: display current month
            $scope.showCurrentMonth();
        });
*/
    }]);
