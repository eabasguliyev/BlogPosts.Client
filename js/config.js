/// <reference path="app.js" />

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/auth/register", {
      controller: "registerController",
      controllerAs: "registerCtrl",
      templateUrl: "Views/auth/register.html",
    })
    .when("/auth/login", {
      controller: "loginController",
      controllerAs: "loginCtrl",
      templateUrl: "Views/auth/login.html",
    })
    .when("/article/create", {
      controller: "createController",
      controllerAs: "createCtrl",
      templateUrl: "Views/article/create.html",
    });
});
