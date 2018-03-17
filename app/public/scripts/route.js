"use strict";

var myApp = angular.module("myApp", ["ngRoute", "ngAnimate", "ngSanitize"]);

myApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "/views/home.html",
			controller: "homeCtrl"
		})
		.when("/presentation/:id", {
			templateUrl: "/views/presentation.html",
			controller: "presentationCtrl"
		})
		.otherwise({
			redirectTo: "/"
		});

	$locationProvider.html5Mode(true);
}]);
