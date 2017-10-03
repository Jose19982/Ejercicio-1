'use strict';

angular.module('vista')
  .controller('ejercicio5Controller', function ($scope) {

    $scope.calcular = function(valorAltura){
      $scope.velocidad = Math.sqrt(2 * 10 * valorAltura);
    }
});