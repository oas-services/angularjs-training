/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('StarD.Controllers',[])
        .controller('RootCtrl',function ($rootScope){})
        .controller('RegisterCtrl',function ($http,$scope){
            this.register = function($user){
                window.alert("Register ok !");
            };
            this.reset = function(){
                $scope.user = {};
            };
    
        });


