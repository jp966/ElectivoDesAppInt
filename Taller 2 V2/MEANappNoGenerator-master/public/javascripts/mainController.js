
//Instancia de angular
var main = angular.module('mainModule',['ngRoute', 'ngResource','LocalStorageModule']);

main.config(rutas);


function rutas($routeProvider){
	var home = {templateUrl: 'app/views/home.html'};
	var movies = {templateUrl: 'app/views/movies.html'};
	var actors = {templateUrl: 'app/views/actors.html'};
	var test ={templateUrl:'app/views/test.html'};

	$routeProvider.when('/',home).when('/movies',movies).when('/actors',actors).when('/test',test).otherwise({ redirectTo: '/'});
}



