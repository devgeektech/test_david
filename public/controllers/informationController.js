var app = angular.module('app')
    angular.module('app').controller('informationController',[ '$scope', 'dataService',
        function($scope, dataService){
            $scope.results = function () {
                dataService.get(function(response) {
                    $scope.data = response.data;
                })
            }
        }]
    )