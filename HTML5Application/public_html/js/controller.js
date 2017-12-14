/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('StarD.Controllers', [])
        .controller('RootCtrl', function($rootScope) {
            $rootScope.users = [{}];
        })

        .controller('ListePlaneteCtrl', function($scope, $http) {
            $scope.Planetes = [];
            $scope.form = [];
            $http.get('/HTML5Application/stars.json').then(function(reponse) {
                $scope.Planetes = reponse.data;
            }, function(reponse) {
                window.alert("pas juste");
            });
            this.selectPlanete = function($planete) {
                $scope.form.push($planete);
                alert($scope.form.length);
                if ($scope.form.length > 2)
                {
                    alert("Vous devez selectionner au minimum 2 planetes");

                } else {
                    $scope.distance = $scope.form[0].distancePlanete;
                }


            }
        })

        .controller('RegisterCtrl', function($scope, $rootScope) {
            this.register = function($user) {
                $rootScope.users.push($user);
            };
            this.reset = function() {
                $scope.user = {};
            };
        });


