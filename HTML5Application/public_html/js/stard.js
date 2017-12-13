/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var toto = angular.module('StarD', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {templateUrl: 'partials/body.html'});
        $routeProvider.when('/calculerDistance', {templateUrl: 'partials/calculerDistance.html'});
        $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'RegisterCtrl as registerCtrl'});
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);