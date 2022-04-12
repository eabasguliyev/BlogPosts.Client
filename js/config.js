/// <reference path="app.js" />

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode(true);
  $httpProvider.interceptors.push("httpInterceptor");

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
    })
    .when("/article/index", {
      controller: "indexController",
      controllerAs: "indexCtrl",
      templateUrl: "Views/article/index.html",
    })
    .when("/article/details/:id", {
      controller: "detailsController",
      controllerAs: "detailsCtrl",
      templateUrl: "Views/article/details.html",
    });
});
