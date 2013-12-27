'use strict';

angular.module('riotApp')
    .controller('NavCtrl', function ($scope, $route) {
        $scope.navigation = {
            free: false,
            all: false,
            summoner: false
        }

        switch ($route.current.loadedTemplateUrl) {
            case 'views/summoner.html':
                $scope.navigation.summoner = true;
                break;
            case 'views/allChamps.html':
            case 'views/champ.html':
                $scope.navigation.all = true;
                break;
            case 'views/main.html':
                $scope.navigation.free = true;
                break;
        }
    });
