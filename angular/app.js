'use strict';
angular.module('vista', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/home',{
        templateUrl: 'partial_views/home.html',
        controller: 'homeController as homeCtrl'
    }).otherwise({ redirectTo: '/home' })
});