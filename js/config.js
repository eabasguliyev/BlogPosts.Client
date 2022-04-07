/// <reference path="app.js" />

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/register", {
      controller: "registerController",
      controllerAs: "registerCtrl",
      templateUrl: "Views/auth/register.html",
    })
    .when("/login", {
      controller: "loginController",
      controllerAs: "loginCtrl",
      templateUrl: "Views/auth/login.html",
    });
});
