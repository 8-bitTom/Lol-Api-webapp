'use strict';

angular.module('riotApp')
    .controller('SummonerCtrl', function ($scope, $http) {
        var key = 'fc2e594e-5a5b-4791-b680-37f358e353d5';
        $scope.haveSummoner = false;
        $scope.summonerName = "bloodyrevolver";
        $scope.fetchSummoner = function () {
            console.log(this.summonerName);
            if (this.summonerName) {
                $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/summoner/by-name/' + this.summonerName + '?api_key=' + key}).
                    success(function (data, status, headers, config) {
                        $scope.summoner = data;
                        $scope.haveSummoner = true;
                    });
            }
        }
        $scope.resetSearch = function () {
            console.log('search reset');
            $scope.haveSummoner = false;
            this.summonerName = "";
            $scope.$broadcast('resetSearch');
        }
    });
