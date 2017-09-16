'use strict';
(function () {
	var controlador = angular.module('app-controller',[]);
	controlador.controller('applicationController', ['$scope', function($scope){
		$scope.ejemplo='Esto es un ejemplo de Angular JS';
	}]);
})();