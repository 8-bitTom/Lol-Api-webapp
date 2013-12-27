'use strict';

angular.module('riotApp')
    .controller('SummonerdetailsCtrl', function ($scope, $http) {
        var key = 'fc2e594e-5a5b-4791-b680-37f358e353d5';

        $scope.details = {
            games: false,
            stats: false,
            runes: false,
            masteries: false
        }

        function resetDetails() {
            $scope.details = {
                games: false,
                stats: false,
                runes: false,
                masteries: false
            }
        }

        //watch for search clear and apropriatly handle data
        $scope.$on('resetSearch', function(){
            console.log('summonerDetails Data Cleared!')
            $scope.stats = null;
            $scope.runes = null;
            $scope.masteries = null;
            $scope.games = null;
            $scope.currentGame = null;
            $scope.currentGameRealStats = null;
            resetDetails();
        });

        $scope.gameIndex = null;

        //summoner skill data http://ddragon.leagueoflegends.com/cdn/3.14.41/data/en_US/summoner.json

        //get all Item Data
        $http({method: 'get', url: 'http://ddragon.leagueoflegends.com/cdn/3.14.41/data/en_US/item.json'}).   //local url: '/data/items.json'
            success(function (data, status, headers, config) {
                $scope.itemList = data.data;  //set the itemList save from: http://ddragon.leagueoflegends.com/cdn/3.14.41/data/en_US/item.json
            })

        $http({method: 'get', url: 'http://ddragon.leagueoflegends.com/cdn/3.14.41/data/en_US/champion.json'}).  //local '/data/champion.json'
            success(function (data, status, headers, config) {
                $scope.championList = data.data;  //set the championList save from: http://ddragon.leagueoflegends.com/cdn/3.14.41/data/en_US/champion.json
            })

        $scope.getStats = function () {
            if(!$scope.stats){
                $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/stats/by-summoner/' + $scope.summoner.id + '/summary?api_key=' + key}).
                    success(function (data, status, headers, config) {
//                    console.log(data);
                        $scope.stats = data;
                        resetDetails();
                        $scope.details.stats = true;
                    });
            }else{
                resetDetails();
                $scope.details.stats = true;
            }
        }

        $scope.getRunes = function () {
            if(!$scope.runes){
                $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/summoner/' + $scope.summoner.id + '/runes?api_key=' + key}).
                    success(function (data, status, headers, config) {
//                    console.log(data);
                        $scope.runes = data;
                        resetDetails();
                        $scope.details.runes = true;
                    });
            }else{
                resetDetails();
                $scope.details.runes = true;
            }
        }

        $scope.getMasteries = function () {
            if(!$scope.masteries){
                $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/summoner/' + $scope.summoner.id + '/masteries?api_key=' + key}).
                    success(function (data, status, headers, config) {
//                    console.log(data);
                        $scope.masteries = data;
                        resetDetails();
                        $scope.details.masteries = true;
                    });
            }else{
                resetDetails();
                $scope.details.masteries = true;
            }
        }

        $scope.getGames = function () {
            if(!$scope.games){
                $http({method: 'get', url: 'http://prod.api.pvp.net/api/lol/na/v1.1/game/by-summoner/' + $scope.summoner.id + '/recent?api_key=' + key}).
                    success(function (data, status, headers, config) {
                        $scope.games = data.games;
//                    console.log($scope.games);
                        resetDetails();
                        $scope.details.games = true;
                        $scope.selectGame(0);
                    });
            }else{
                resetDetails();
                $scope.details.games = true;
            }
        }

        $scope.selectGame = function (index) {
            $scope.currentGame = $scope.games[index];
            $scope.currentGameRealStats = {};
            $scope.currentGameRealStats.items = [];
            for (var i = 0; i < $scope.currentGame.statistics.length; i++) {
                var currentStat = $scope.currentGame.statistics[i];

                if (currentStat.name) {
                    if (currentStat.name.substr(0, 4) !== "ITEM") { //send ITEM 0-5 to an array for easy ng-repeat
                        $scope.currentGameRealStats[currentStat.name] = currentStat.value
                    } else {
                        $scope.currentGameRealStats.items.push(currentStat.value)
                    }
                }
            }
            console.log($scope.currentGameRealStats);
        }


    });
