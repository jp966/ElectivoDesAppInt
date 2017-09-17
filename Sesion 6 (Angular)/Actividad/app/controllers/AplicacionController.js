'use strict';
(function () {
	var controlador = angular.module('app-controller',[]);
	controlador.controller('applicationController', ['$scope', function($scope){
		//$scope.ejemplo='Esto es un ejemplo de Angular JS';
		$scope.ejemplo = [
			{
				nombre: 'Juan',
				apellido: 'Nieves',
				imagen: 'https://pbs.twimg.com/profile_images/613894506480439296/MGWBzW3B.jpg',
				vivo: true
			},

			{
				nombre: 'Daenerys',
				apellido: 'Targaryen',
				imagen: 'https://pbs.twimg.com/profile_images/699219278927675393/de5Cjrju.png',
				vivo: false
			},

			{
				nombre: 'Eddard',
				apellido: 'Stark',
				imagen: 'https://pbs.twimg.com/profile_images/623606708531818496/8ap1ZAb6.jpg',
				vivo: true
			}

		];

		$scope.nombre="";
		$scope.ruta="";
		$scope.apellido="";
		//lista con opciones de estados para el select del formulario
		$scope.estados=["Vivo","Muerto"];
		//variable con el estado al que se le asinara la selección
		$scope.estado="Vivo";

		$scope.setInputs = function(form){
		  if(form.$valid) {
		  	if($scope.estado=="Vivo"){
		   		$scope.nuevo=[{nombre : $scope.nombre, apellido:$scope.apellido, imagen:$scope.ruta, vivo:true}];
			}else{
				$scope.nuevo=[{nombre : $scope.nombre, apellido:$scope.apellido, imagen:$scope.ruta, vivo:false}];
			}
			$scope.ejemplo=$scope.ejemplo.concat($scope.nuevo);

		  }
		};

		/*
		$scope.setInputs = function(form) {
			
				$scope.nuevo=[{nombre : $scope.nombre, apellido:$scope.apellido, imagen:$scope.ruta, vivo:$scope.estado}];
				
				$scope.ejemplo=$scope.ejemplo.concat($scope.nuevo);

		};
		*/

	}]);
})();