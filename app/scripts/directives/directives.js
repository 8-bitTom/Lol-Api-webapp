'use strict';

angular.module('riotApp')
    .directive('navigation',function () {
        return {
            templateUrl: 'views/directives/navigation.html',
            restrict: 'E'
        };
    }).
    directive('footer',function () {
        return{
            templateUrl: 'views/directives/footer.html',
            restrict: 'E'
        }
    }).
    directive('summonerDetails', function () {
        return{
            templateUrl: 'views/directives/summonerDetails.html',
            restrict: 'E'
        }
    }).
    directive('header', function(){
        return{
            templateUrl: 'views/directives/header.html',
            restrict: 'E'
        }
    })
