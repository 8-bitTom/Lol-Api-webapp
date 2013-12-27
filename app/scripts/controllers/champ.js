'use strict';

angular.module('riotApp')
    .controller('ChampCtrl', function ($scope, $rootScope, $routeParams, $http) {
        $scope.champName = $routeParams.name;
        $scope.hasChamp = false;

        if ($rootScope.allChamps) {
            currentChamp();
            $scope.hasChamp = true;
        } else {
            var key = 'fc2e594e-5a5b-4791-b680-37f358e353d5';
            $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/champion?api_key=' + key}).
                success(function (data, status, headers, config) {
                    $rootScope.allChamps = data.champions;
                    currentChamp(data.champions);
                    $scope.hasChamp = true;
                });
        }

        function currentChamp(data) {
            if (!data) {
                data = $rootScope.allChamps;
            }

            for (var x = 0; x < data.length; x++) {
                var champ = data[x];
                console.log(champ);
                if (champ.name === $scope.champName) {
                    $scope.currentChamp = champ;
                    break;
                }
            }
        }

    });
