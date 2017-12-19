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
        });