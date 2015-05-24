'use strict';

var app = angular.module('bookStoreApp', ['ngRoute', 'ui.bootstrap', 'chart.js', 'ngCookies'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/Login', {
                templateUrl: 'Views/LoginForm.html'
            })
            .when('/Register', {
                templateUrl: 'Views/RegisterForm.html'
            })
            .when('/Authors',
            {
                templateUrl: 'Views/Author/Authors.html'                
            })
            .when('/CreateAuthor',
            {
                templateUrl: 'Views/Author/CreateAuthor.html'
            })
            .when('/Orders',
            {
                templateUrl: 'Views/Orders.html'
            })
            .when('/Reviews',
            {
                templateUrl: 'Views/Reviews.html'
            })
            .when('/Books',
            {
                templateUrl: 'Views/Book/Books.html'
            })
            .when('/ContactUs',
            {
                templateUrl: 'Views/ContactUs.html'
            })
            .when('/Dashboard',
            {
                templateUrl: 'Views/Dashboard.html'
            })
            .otherwise({
                templateUrl: 'Views/Home.html'
            });
        }
    ]);

  