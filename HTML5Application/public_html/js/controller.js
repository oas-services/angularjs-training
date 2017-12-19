/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('StarD.Controllers', [])
        .controller('NavigationController', function($scope) {
            // Must use a wrapper object, otherwise "activeItem" won't work
            $scope.states = {};
            $scope.states.activeItem = 'item1';
            $scope.items = [{
                    id: 'item1',
                    title: 'Accueil',
                    link: '#!/main',
                    icon: 'glyphicon glyphicon-home'
                }, {
                    id: 'item2',
                    title: 'Détail Planète',
                    link: '#!/detailPlanete',
                    icon: 'glyphicon glyphicon-zoom-in'
                }, {
                    id: 'item3',
                    title: 'Calculer Distance',
                    link: '#!/calculerDistance',
                    icon: 'glyphicon glyphicon-align-left'
                }];
            $scope.itemsr = [{
                    id: 'item4',
                    title: 'Sign In',
                    link: '#!/register',
                    icon: 'glyphicon glyphicon-home'
                }, {
                    id: 'item5',
                    title: 'Log In',
                    link: '#!/login',
                    icon: 'glyphicon glyphicon-align-left'
                }];
        })

        .controller('RootCtrl', function($rootScope) {
            $rootScope.users = [{}];
        })

//________START listePlaneteCtrl
        .controller('ListePlaneteCtrl', function($scope, $http, $rootScope) {
            $scope.isActive = function(viewLocation) {
                var active = (viewLocation === $location.path());
                return active;
            };
            $scope.info = "1 UA = 149 598 000 KM";
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
                document.getElementById('line' + $planete.idPlanete).className = "lineUnSelect"; //ADD CLASS "lineUnSelect"
                document.getElementById('input' + $planete.idPlanete).checked = false;           //UNCHECK INPUT
                $planete.checked = false;                                                        //FORM UNCKECK
            }

            this.selectPlanete = function($planete) {
                console.log($scope.form);
                if ($planete.checked) { //If it is checked
                    //alert('checked');
                    $scope.form.push($planete);
                    setStyle($planete);
                    if ($scope.form.length === 2) // if 2 planets selected -> Calculate
                    {
                        calculateDistance();
                    } else if ($scope.form.length > 2) { // if 3 planets selected
                        //alert('Length > 2');
                        unStyle($scope.form[1]);
                        $scope.form.splice($scope.form.length - 2, 1);
                        setStyle($planete);
                        calculateDistance();
                    }
                } else { //if uncheck input remove line on table
                    //alert('unchecked');
                    unStyle($planete);
                    if ($scope.form[0].idPlanete === $planete.idPlanete) {
                        $scope.form.splice(0, 1);
                    } else if ($scope.form[1].idPlanete === $planete.idPlanete) {
                        $scope.form.splice(1, 1);
                    } else {
                        $scope.form.splice(2, 1);
                    }
                    $scope.distance = null;
                    $scope.distanceUA = null;
                    $scope.unitekm = null;
                    $scope.uniteUA = null;
                }
            };

            function calculateDistance() {
                $scope.unitekm = "KM";
                $scope.uniteUA = "UA";
                $scope.info = "";
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


