'use strict';

angular.module('vista')
  .controller('homeController', function ($scope) {
    $scope.realidad = true;
    $scope.redes = true;
    $scope.robot = true;
    $scope.verRealidad = function(){
      $scope.redes = true;
      $scope.robot = true;
      $scope.realidad = !$scope.realidad;
    };
    $scope.verRedes = function(){
      $scope.realidad = true;
      $scope.robot = true;
      $scope.redes = !$scope.redes;
    };
    $scope.verRobot = function(){
      $scope.redes = true;
      $scope.robot = !$scope.robot;
      $scope.realidad = true;
    }
});