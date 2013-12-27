'use strict';

angular.module('riotApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/champ/:name', {
                templateUrl: 'views/champ.html',
                controller: 'ChampCtrl'
            })
            .when('/allChamps', {
                templateUrl: 'views/allChamps.html',
                controller: 'AllchampsCtrl'
            })
            .when('/summoner', {
                templateUrl: 'views/summoner.html',
                controller: 'SummonerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
