'use strict';

var app = angular.module('bookStoreApp', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/Login', {
                templateUrl: 'Views/LoginForm.html'
            })
            .when('/Register', {
                templateUrl: 'Views/RegisterForm.html'
            });
  }]);
  