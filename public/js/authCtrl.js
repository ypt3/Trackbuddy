// var authCtrl = angular.module('authCtrl',[] );
//
// authCtrl.factory('auth', function($http, $window){
//   var auth = {};
//
//   auth.saveToken = function (token) {
//     $window.localStorage['buddy-token'] = token;
//   };
//
//   auth.getToken = function(){
//     return $window.localStorage['buddy-token'];
//   };
//
//   auth.isLoggedIn = function(){
//     var token = auth.getToken();
//
//     if (token) {
//       var payload = JSON.parse($window.atob(token.split('.')[1]));
//
//       return payload.exp  > Date.now() / 1000;
//     } else {
//       return false;
//     }
//   };
//
//   auth.currentUser = function(){
//     if (auth.isLoggedIn()){
//       var token = auth.getToken();
//       var payload = JSON.parse($window.atob(token.split('.')[1]));
//
//       return payload.usersname;
//     }
//   };
//
//   auth.register = function(users){
//     return $http.post('/register', users).success(function(data){
//       auth.saveToken(data.token);
//     });
//   };
//
//   auth.logIn = function(users){
//     return $http.post('/login', users).success(function(data){
//       auth.saveToken(data.token);
//     });
//   };
//
//   auth.logOut = function(){
//     $window.localStorage.removeItem('buddy-token');
//   };
//   return auth;
//
// });
//
// authCtrl.controller('AuthCtrl', function($scope, $state, auth){
//   $scope.users = {};
//
//   $scope.register = function(){
//     auth.register($scope.users).error(function(error){
//       $scope.error = error;
//     }).then(function(){
//       $state.go('join');
//     });
//   };
//
//   $scope.logIn = function(){
//     auth.logIn($scope.users).error(function(error){
//       $scope.error = error;
//     }).then(function(){
//       $state.go('join');
//     });
//   };
// });
