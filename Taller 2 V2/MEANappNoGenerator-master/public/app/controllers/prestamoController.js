'use strict';
(function () {
//Instancia de angular
var home = angular.module('mainModule');


//Se crea un controlador con su funcion callback
home.controller('prestamoController',['$location','$scope', 'localStorageService',prestamoController] );




//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function prestamoController($location, $scope, localStorageService){


	if($scope.clientes = JSON.parse(localStorageService.get('clientes'))){

		var capital_actual=JSON.parse(localStorageService.get('capital')) || 10000000;

		$scope.capital_actual=capital_actual;

		/*
		$scope.usuario = {nombreCompleto: '', telefono: 0};
		*/

		$scope.usuario=
			{
				nombre_completo:'',
				email:'',
				telefono:''
			};

		//variable para habilitar formulario de nuevo prestamo
		$scope.habilitar = false;
		//variable para habilitar el formulario de modificación de usuario
		$scope.modificar=  false;
		//variable para guardar temporalmente al cliente que se desee modificar
		$scope.clienteTemporal=null;

		//estructura prestamo
		$scope.prestamo={montoPrestamo:'', cantidadCuotas:''};


		//arreglo de deudas
	   //var totalDeudas=[];
	   var totalDeudas=JSON.parse(localStorageService.get('deudas')) || [];
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



		function verificarCliente(valor,cliente){
			return valor===cliente;

		}

		$scope.eliminarCliente=function(cliente){
				//en la posicion del objeto cliente, eliminar 1 item
				var indice=null;

				var clientes=JSON.parse(localStorageService.get('clientes'));
				
				for(var i=0;i<clientes.length;i++){
					if(verificarCliente(clientes[i].nombre_completo+""+clientes[i].email+""+clientes[i].telefono,
						cliente.nombre_completo+""+cliente.email+""+cliente.telefono)){
						indice=i;
						break;
					}
				}

				clientes.splice(indice, 1);

				localStorageService.set('clientes',JSON.stringify(clientes));

				$scope.clientes=clientes;
				
				
			}

		$scope.mostrarVentanita = function(nombre, telefono,email){
			$scope.usuario.nombre_completo = nombre;
			$scope.usuario.telefono = telefono;
			$scope.usuario.email = email;
			$scope.habilitar = !$scope.habilitar;
		}


		$scope.mostrarModificar=function(cliente){
			$scope.usuario.nombre_completo = cliente.nombre_completo;
			$scope.usuario.telefono = cliente.telefono;
			$scope.usuario.email = cliente.email;
			$scope.modificar = !$scope.modificar;

			$scope.clienteTemporal=cliente;
		}
	

		$scope.guardarModificacion=function(){
			//Se busca el cliente en localstorage a partir del cliente temporal creado
			var clientes=JSON.parse(localStorageService.get('clientes'));

			for(var i=0;i<clientes.length;i++){
				if(clientes[i].nombre_completo+""+clientes[i].email+""+clientes[i].telefono==
					$scope.clienteTemporal.nombre_completo+""+$scope.clienteTemporal.email+""+$scope.clienteTemporal.telefono){

					clientes[i].nombre_completo=$scope.usuario.nombre_completo;
					clientes[i].email=$scope.usuario.email;
					clientes[i].telefono=$scope.usuario.telefono;
					break;
				}
			}

			//se busca el cliente dentro de las deudas si es que hay
			var deudas=JSON.parse(localStorageService.get('deudas'));

			if(deudas!=null){
				for(var i=0;i<deudas.length;i++){
					if(deudas[i].cliente.nombre_completo+""+deudas[i].cliente.telefono==
						$scope.clienteTemporal.nombre_completo+""+$scope.clienteTemporal.telefono){

						deudas[i].cliente.nombre_completo=$scope.usuario.nombre_completo;
						deudas[i].cliente.email=$scope.usuario.email;
						deudas[i].cliente.email=$scope.usuario.telefono;
					}
				}


				localStorageService.set('deudas',JSON.stringify(deudas));
			}

			localStorageService.set('clientes',JSON.stringify(clientes));
			//para actualizar la lista de clientes de inmediato
			$scope.clientes=clientes;

			$scope.modificar=false;
			$scope.clienteTemporal=null;
		}


		 $scope.agregarDeuda = function(formulario) {

	   	if(formulario.$valid){

	   		//asignación de variables locales para operaciones
	   		var nombreC=$scope.usuario.nombre_completo;
	   		var telefonoC=$scope.usuario.telefono;

	   		var idCuota;
	   		var interes;
	   		var prestamo=$scope.prestamo.montoPrestamo;
	   		var n_cuotas=$scope.prestamo.cantidadCuotas;

	   		
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
			
			localStorageService.set("deudas", JSON.stringify(totalDeudas));

			//CAPITAL
			capital_actual=capital_actual-prestamo;
			$scope.capital_actual=capital_actual;
			localStorageService.set("capital",JSON.stringify(capital_actual));

			$scope.prestamoCliente=null;
			$scope.nCuotasPrestamo=null;

			$scope.prestamo.montoPrestamo='';
			$scope.prestamo.cantidadCuotas='';

			//el formulario desaparecerá
			$scope.habilitar=!$scope.habilitar;
			

			}

		};



	}else{
		$location.path("/actors");
	}
	





}

})();


