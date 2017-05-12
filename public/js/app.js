
        var app =  angular.module('app',['ui.router']);

        app.config([
            '$stateProvider', '$urlRouterProvider','$controllerProvider','$httpProvider',
            function ($stateProvider, $urlRouterProvider, $controllerProvider, $httpProvider) {
                $urlRouterProvider.otherwise('/information');
                $stateProvider
                    .state('base', {
                        abstract: true,
                        url: '',
                        templateUrl: 'views/base.html',
                    })
                    .state('information', {
                        url: '/information',
                        parent: 'base',
                        templateUrl: 'views/information.html',
                        controller: 'informationController'
                    })
            }
        ]);

