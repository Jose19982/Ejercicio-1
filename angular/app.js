'use strict';
angular.module('vista', ['ngRoute'])
.constant('BASE_URL', 'http://localhost:8080/')
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = "POST, GET, OPTIONS, DELETE";
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = "3600";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = "x-requested-with";
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/groups',{
        templateUrl: 'partial_views/groups.html',
        controller: 'groupsCtrl as groups'
    })
    .when('/home',{
        templateUrl: 'partial_views/home.html',
        controller: 'LoginCtrl as login'
    }).otherwise({ redirectTo: '/home' })
});