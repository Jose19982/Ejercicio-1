'use strict';

angular.module('vista')
  .controller('homeController', function ($scope) {
    $scope.format = -1;
    $scope.changeFormat = function(){
      $scope.format = $scope.format * -1;
    };
});