/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('StarD.Controllers', [])
        .controller('RootCtrl', function($rootScope) {
            $rootScope.users = [{}];
        })

        .controller('DetailPlaneteCtrl', function($scope, $http) {
            $scope.detail = [];

            $http.get('/HTML5Application/stars.json').then(function(reponse) {
                $scope.detail = reponse.data;
            }, function(reponse) {
                window.alert("pas juste");
            });

        })


        .controller('ListePlaneteCtrl', function($scope, $http) {
            $scope.detail = [];

            $http.get('/HTML5Application/stars.json').then(function(reponse) {
                $scope.detail = reponse.data;
            }, function(reponse) {
                window.alert("pas juste");
            });
        })

        .controller('RegisterCtrl', function($http, $scope, $rootScope) {
            this.register = function($user) {
                $rootScope.users.push($user);
            };
            this.reset = function() {
                $scope.user = {};
            };

        });


