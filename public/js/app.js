// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('trackbuddy', ['addCtrl','queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        // Join Team Control Panel
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        // Find Teammates Control Panel
        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',
        // login user
        // }).when('/login', {
        //   controller: '',
        //   templateUrl: 'partials/login.html',
        // // register user
        // }).when('/register', {
        //   controller: '',
        //   templateUrl: 'partials/register.html',
        //   All else forward to the Join Team Control Panel
        }).otherwise({redirectTo:'/join'});
      });
