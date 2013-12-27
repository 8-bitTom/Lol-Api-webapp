'use strict';

angular.module('riotApp')
    .controller('MainCtrl', function ($scope, $rootScope, $http) {
        var key = 'fc2e594e-5a5b-4791-b680-37f358e353d5';
        $scope.today = new Date();
        if (!$rootScope.champs) {
            $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/champion?freeToPlay=true&api_key=' + key}).
                success(function (data, status, headers, config) {
                    $rootScope.champs = data.champions;
                });
        }
    });
