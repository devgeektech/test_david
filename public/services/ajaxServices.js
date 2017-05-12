

        var app = angular.module('app');
        app.service('ajaxService', ['$http', function($http) {

            this.post = function (data, route, callback) {

                $http.post(route, data).success(function (response, status, headers, config) {

                    if (callback)
                        callback(response, status);
                }).error(function (response, status) {
                    if (callback) callback(response.message || response || 'error', response);
                    var message = response.message || 'failed';
                    if (status == 404) {
                        message = response;
                    }
                });
            };

            this.get = function (data, route, callback) {
                $http({
                    method: 'GET',
                    url: route,
                    params: data
                }).then(function (response, status, headers, config) {
                    if (callback)
                        callback(response);
                }).error(function (response) {
                    if (response && callback) callback(response.message || 'error', response);
                    var message = (response && response.message) ? response.message : 'failed';
                    if (status == 404) {
                        message = response;
                    }
                });
            };

            this.put = function (data, route, callback) {
                $http({
                    method: 'PUT',
                    url: route,
                    data: data
                }).success(function (response, status, headers, config) {
                    if (callback) {
                        callback(response.isSuccess ? null : response.message || 'error', response.data);
                    }
                }).error(function (response, status) {
                    if (response && callback) callback(response.message || 'error', response);
                    var message = (response && response.message) ? response.message : 'failed';
                    if (status == 404) {
                        message = response;
                    }
                });
            };

            this.delete = function (data, route, callback) {
                $http.delete(route, data).success(function (response, status, headers, config) {
                    if (callback)
                        callback(response.isSuccess ? null : response.message || 'error', response.data);
                }).error(function (response, status) {
                    if (callback) callback(response.message || response || 'error', response.data);
                    var message = response.message || 'failed';
                    if (status == 404) {
                        message = response;
                    }
                });
            };
        }]);

