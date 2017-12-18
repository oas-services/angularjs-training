/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('StarD.Controllers', [])

        .controller('RootCtrl', function($rootScope) {
            $rootScope.users = [{}];
        })

//________START listePlaneteCtrl
        .controller('ListePlaneteCtrl', function($scope, $http) {
            $scope.historique = [];
            $scope.Planetes = [];
            $scope.form = [];
            $http.get('/HTML5Application/stars.json').then(function(reponse) {
                $scope.Planetes = reponse.data;
            }, function(reponse) {
                window.alert("pas juste");
            });

            function setStyle($planete) {
                document.getElementById('line' + $planete.idPlanete).className = "lineSelect";
            }
            function unStyle($planete) {
                document.getElementById('line' + $planete.idPlanete).className = "lineUnSelect";
            }

            this.selectPlanete = function($planete) {
                console.log($scope.form);
                if ($planete.checked) { //If it is checked

                    $scope.form.push($planete);
                    setStyle($planete);
                    if ($scope.form.length === 2) // if 2 planets selected
                    {
                        calculateDistance();
                    } else if ($scope.form.length > 2) { // if 3 planets selected
                        alert("Vous devez selectionner au minimum 2 planetes");
                        document.getElementById('input' + $planete.idPlanete).checked = false;
                        $scope.form[2].checked = false;
                        $scope.form.splice(2, 1);
                        unStyle($planete);
                    }
                } else { //if uncheck input remove line on table
                    unStyle($planete);
                    $scope.form.splice($scope.form.length - 1, 1);
                    $scope.distance = null;
                    $scope.distanceUA = null;
                    $scope.unitekm = null;
                    $scope.uniteUA = null;
                }
            };

            function calculateDistance() {
                $scope.unitekm = "KM";
                $scope.uniteUA = "UA";
                if ($scope.form[0].distanceSoleil < $scope.form[1].distanceSoleil) {
                    $scope.distance = $scope.form[1].distanceSoleil - $scope.form[0].distanceSoleil;
                } else {
                    $scope.distance = $scope.form[0].distanceSoleil - $scope.form[1].distanceSoleil;
                }
                $scope.distanceUA = $scope.distance / 149598000;
                //var hist = {planete1: $scope.form[0].nomPlanete, distance: $scope.distance, planete2: $scope.form[1].nomPlanete};
                historique($scope.distance);

            }
            function historique($result) {
                $scope.historique.push($result);
            }
            //$scope.$watch(this.selectPlanete, calculateDistance);
        })
//________END listePlaneteCtrl

        .controller('RegisterCtrl', function($scope, $rootScope) {
            this.register = function($user) {
                $rootScope.users.push($user);
            };
            this.reset = function() {
                $scope.user = {};
            };
        });


