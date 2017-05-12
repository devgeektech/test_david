
var app = angular.module('app')
app.service('dataService',['ajaxService', function(ajaxService) {
    this.get = function(callback) {
        ajaxService.get(null, 'https://api.totallister.net/hello', callback);
    };
}]);