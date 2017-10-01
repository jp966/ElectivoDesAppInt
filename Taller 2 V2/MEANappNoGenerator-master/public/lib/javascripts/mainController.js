'use strict';
(function () {
//Instancia de angular
var main = angular.module('mainModule',['ngRoute', 'ngResource','LocalStorageModule']);

main.config(rutas);


function rutas($routeProvider){
	var deudas = {templateUrl: 'app/views/deudas.html'};
	var clientes = {templateUrl: 'app/views/clientes.html'};
	var prestamos ={templateUrl:'app/views/prestamos.html'};

	$routeProvider.when('/',clientes).when('/deudas',deudas).when('/clientes',clientes).when('/prestamos',prestamos).otherwise({ redirectTo: '/'});
}

})();


