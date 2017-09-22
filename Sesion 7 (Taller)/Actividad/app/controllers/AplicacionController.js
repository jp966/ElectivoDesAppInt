'use strict';
(function () {
	var controlador = angular.module('app');
	controlador.controller('applicationController', ['$scope','$localStorage', function($scope,$localStorage){
		//$scope.ejemplo='Esto es un ejemplo de Angular JS';

		$scope.clientes=
			{
				nombre_completo:'',
				email:'',
				telefono:''
			};

		var totalClientes = [];	

		totalClientes = $localStorage.clientes || [];

		$scope.totalClientes = totalClientes;
 


		//Guardar clientes
		//localStorage.setItem('clientes', JSON.stringify($scope.clientes));
		
		

		/*
		$scope.capital={
			capital_actual: int
		};
		
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

	   $scope.agregarCliente = function() {
	  	 		
	   			console.log($scope.clientes);
	   			totalClientes.push($scope.clientes);

				$scope.totalClientes = totalClientes;
				console.log('con scope');
				console.log($scope.totalClientes);

				$localStorage.clientes = totalClientes;
				$scope.clientes=
					{
						nombre_completo:'',
						email:'',
						telefono:''
					};


				/*
				var retrievedObject = JSON.parse(localStorage.getItem('clientes'));

				retrievedObject=retrievedObject.concat($scope.nuevo);

				localStorage.setItem('clientes',JSON.stringify(retrievedObject));

				console.log(localStorage.getItem('clientes'));
				*/

			

		};

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