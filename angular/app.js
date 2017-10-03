'use strict';
angular.module('vista', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/home',{
        templateUrl: 'partial_views/home.html',
        controller: 'LoginCtrl as login'
    }).otherwise({ redirectTo: '/home' })
});