'use strict';
(function () {
	var controlador = angular.module('app');
	controlador.controller('clienteController', ['$scope','$localStorage', function($scope,$localStorage){

		$scope.clientes=
			{
				nombre_completo:'',
				email:'',
				telefono:''
			};

		var totalClientes = [];	
		//toma el valor almacenado de clientes en localStorage o e de un arreglo vacío
		totalClientes = $localStorage.clientes || [];
		//la variable del $scope tomara el valor del total cliente creado de forma local
		$scope.totalClientes = totalClientes;

		/*
		$scope.cuotas= [{
		       id: 1,
		       n_cuotas: 1,
		       interes: 0
		   },{
		       id: 2,
		       n_cuotas: 3,
		       interes: 6
		   },{
		       id: 3,
		       n_cuotas: 6,
		       interes: 15
		   },{
		       id: 4,
		       n_cuotas: 9,
		       interes: 25
		   }];

		 $scope.deudas=[{
	       cliente: {
	               nombre_completo: String,
	               email: String,
	               telefono: String
	           },
	       cuota_id: int,
	       cuotas: [
	           {
	               valor: int,
	               pagado: boolean
	           }
	       ],
	       prestamo: int,
	       total:int
	   }];
	   */

	   $scope.agregarCliente = function(form) {

	   	if(form.$valid){
	   		//a totalClientes local se le agrega el nuevo cliente (de formulario) con push
	   		totalClientes.push($scope.clientes);
	   		//al totalClientes del scope (el que recorre ng-repeat) se le asigna el totalClientes local (con nuevo cliente)
			$scope.totalClientes = totalClientes;
			//a clientes del localStorage se les asigna el valor de totalClientes local
			$localStorage.clientes = totalClientes;

			//se limpian los valores del cliente agregado anteriormente
			$scope.clientes=
				{
					nombre_completo:'',
					email:'',
					telefono:''
				};

			}

		};

		

		$scope.eliminarCliente=function(cliente){
			//en la posicion del objeto cliente, eliminar 1 item
			$localStorage.clientes.splice($localStorage.clientes.indexOf(cliente), 1);

		}

		/*
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

		*/
		
		

	}]);
})();