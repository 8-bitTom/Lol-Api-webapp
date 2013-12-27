'use strict';

angular.module('riotApp')
    .filter('champNameSpacer',function () {
        return function (input) {
            var out = input.replace(/([A-Z])/g, ' $1');
            return out;
        };
    }).
    filter('statReadable',function () {
        return function (input) {
            var out = input.replace(/_/g, " ");
            out = out.toLowerCase();
            if (out === 'odin') {
                out = 'Dominion'
            } else {
                out = out.replace(/\b./g, function (m) {
                    return m.toUpperCase();
                });
            }
            return out;
        };
    }).
    filter('itemToName',function () {
        return function (input, $scope) {
            var out = $scope.itemList[input].name;
            return out;
        }
    }).
    filter('itemToBg',function () {
        return function (input, $scope) {
            var item = $scope.itemList[input].image;
            var url = "url('http://ddragon.leagueoflegends.com/cdn/3.14.41/img/sprite/item0.png') ";
            var height = 'height:' + item.h + 'px; ';
            var width = 'width:' + item.w + 'px; '
            var background = 'background:' + url + '-' + item.x + 'px ' + '-' + item.y + 'px no-repeat;'
            return height + width + background;
        }
    }).
    filter('ChampIdToName', function () {
        return function (input, $scope) {
            var out = "";
            angular.forEach($scope.championList, function(value, key){
                if(value.key == input){
                    out = key;
                }
            });
            return out;
        }
    }).
    filter('idToMap', function(){
        return function (input){
            var out = input;
            switch(input){
                case 1:
                case 2:
                    out = 'Summoner\'s Rift';
                    break;
                case 3:
                    out = 'The Proving Grounds';
                    break;
                case 4:
                case 10:
                    out = 'Twisted Treeline'
                    break;
                case 8:
                    out = 'The Crystal Scar';
                    break;
                case 12:
                    out = 'Howling Abyss';
                    break;
            }
            return out;
        }
    }).
    filter('winFilter', function(){
        return function(input){
            var out;
            if(input === 1){
                out = 'Win';
            }else{
                out = 'Loss';
            }
            return out;
        }
    })