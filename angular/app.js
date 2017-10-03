'use strict';
angular.module('vista', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/ejercicio5',{
        templateUrl: 'partial_views/ejercicio5.html',
        controller: 'ejercicio5Controller as ejer5Ctrl'
    })
    .when('/home',{
        templateUrl: 'partial_views/home.html',
        controller: 'homeController as homeCtrl'
    }).otherwise({ redirectTo: '/home' })
});