'use strict';

angular.module('riotApp')
    .controller('AllchampsCtrl', function ($scope, $rootScope, $http) {
        var key = 'fc2e594e-5a5b-4791-b680-37f358e353d5';
        if (!$rootScope.allChamps) {
            $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/champion?api_key=' + key}).
                success(function (data, status, headers, config) {
                    $rootScope.allChamps = data.champions;
                });
        }
    });
