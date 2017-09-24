'use strict';
(function () {
	var controlCapital = angular.module('app');
	controlCapital.controller('capitalController', ['$scope','$localStorage','$window', function($scope,$localStorage,$window){

		//CAPITAL
		var capital_actual=$localStorage.capital || 10000000;

		$scope.capital_actual=capital_actual;

		//VARIABLES A TRAER DE FORMULARIO PARA AGREGAR PRESTAMO
		$scope.nombreCliente="";
		$scope.emailCliente="";
		$scope.telefonoCliente="";
		$scope.prestamoCliente=null;
		$scope.arrayNumCuotas=[1,3,6,9];
		$scope.nCuotasPrestamo=$scope.arrayNumCuotas[0];

		//booleano para activar campos de formulario de prestamos
		$scope.prestamoHabilitado=false;

		//arreglo de clientes clickeados para revisar deudas
		var deudor=[];
		deudor=$localStorage.deudor || [];
		$scope.deudor=deudor;
	
		//arreglo de deudas
	   var totalDeudas=[];
	   totalDeudas=$localStorage.deudas || [];
	   $scope.totalDeudas=totalDeudas;

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

		$scope.activarFormulario=function(){
			$scope.prestamoHabilitado=true;
		}

		$scope.agregarClienteDeudor=function(cliente){

			$localStorage.deudor =cliente;
			var nomCliente=$localStorage.deudor.nombre_completo;

			$localStorage.deudor=[];

			for(var i=0;i<$localStorage.deudas.length;i++){
				if($localStorage.deudas[i].cliente.nombre_completo==nomCliente){

					var prestamosDeudor=$localStorage.deudas[i];
					$localStorage.deudor=$localStorage.deudor.concat(prestamosDeudor);
					$scope.deudor=$localStorage.deudor;
				}
			}

			$window.location.reload();


		}
	
	   $scope.agregarDeuda = function(formulario) {

	   	if(formulario.$valid){

	   		//asignación de variables locales para operaciones
	   		var nombreC=$scope.nombreCliente;
	   		var emailC=$scope.emailCliente;
	   		var telefonoC=$scope.telefonoCliente;

	   		var idCuota;
	   		var interes;
	   		var prestamo=$scope.prestamoCliente;
	   		var n_cuotas=$scope.nCuotasPrestamo;

	   		for(var i=0;i<$scope.cuotas.length;i++){
	   			if($scope.cuotas[i].n_cuotas==n_cuotas){
	   				idCuota=$scope.cuotas[i].id;
	   				interes=$scope.cuotas[i].interes;
	   			}
	   		}
	   		var totalPrestamo=prestamo + (prestamo * (interes / 100));
	   		var totalCuota=totalPrestamo/n_cuotas;


	   		//creación de cuotas
	   		var cuotasArray=[];

	   		for(var i=0;i<n_cuotas;i++){
	   			var cuotasTemp={
	   				valor:totalCuota,
	   				pagado:false
	   			}

	   			cuotasArray.push(cuotasTemp);
	   		}

	   		//creacion de deuda

	   		var deudas={
	   			cliente:{
	   				nombre_completo:nombreC,
	   				email:emailC,
	   				telefono:telefonoC
	   			},
	   			cuota_id:idCuota,
	   			cuotas:cuotasArray,
	   			prestamo:prestamo,
	   			total:totalPrestamo
	   		}


	  	 	//DEUDAS DE CLIENTES	
	   		totalDeudas.push(deudas);

			$scope.totalDeudas = totalDeudas;
			
			$localStorage.deudas = totalDeudas;

			//CAPITAL
			capital_actual=capital_actual-prestamo;
			$scope.capital_actual=capital_actual;
			$localStorage.capital=capital_actual;

			$scope.prestamoCliente=null;
			$scope.nCuotasPrestamo=null;

			$window.location.reload();
			
			}

		};

		
	
	}]);
})();