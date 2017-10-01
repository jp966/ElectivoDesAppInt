'use strict';
(function () {
//Instancia de angular
var home = angular.module('mainModule');


//Se crea un controlador con su funcion callback
home.controller('deudasController', ['$location','$scope', 'localStorageService',deudasController]);




//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function deudasController($location,$scope,localStorageService){


	//arreglo de deudas
	   //var totalDeudas=[];
	   var totalDeudas=JSON.parse(localStorageService.get('deudas')) || [];
	   $scope.totalDeudas=totalDeudas;

	   //capital
	   var capital_actual=JSON.parse(localStorageService.get('capital')) || 10000000;
	   $scope.capital_actual=capital_actual;

	   //indice deuda del cliente seleccionado
	   var indiceDeuda=null;
	   //arreglo temporal que guardará las cuotas del clente seleccionado
	   $scope.cuotasCliente=[];
	   //booleano para mostrar y esconder tabla
	   $scope.habilitarTabla=false;

	   //función mara mostrar las cuotas del cliente
	   $scope.mostrarCuotas=function(deuda){
	   	$scope.deudaCliente=deuda;
	   
	   	indiceDeuda=totalDeudas.indexOf(deuda);

	   	$scope.cuotasCliente=totalDeudas[indiceDeuda].cuotas;

	   	$scope.habilitarTabla=!$scope.habilitarTabla;

	   }
	   //paga cuota individual
	   $scope.pagarCuota=function(cuota){
	   	var indice=totalDeudas[indiceDeuda].cuotas.indexOf(cuota);

	   	totalDeudas[indiceDeuda].cuotas[indice].pagado=true;
	   	
	   	$scope.totalDeudas=totalDeudas;
		localStorageService.set('deudas',JSON.stringify(totalDeudas));
	   	
	   	capital_actual=capital_actual+cuota.valor;
		$scope.capital_actual=capital_actual;
		localStorageService.set('capital',JSON.stringify(capital_actual));

	   }


	   /*
	   //paga las cuotas de la deuda seleccionada
	   $scope.pagarCuotas=function(cuota,deuda){
	   	var indice=totalDeudas.indexOf(deuda);
	   		for(var i=0;i<totalDeudas[indice].cuotas.length;i++){
	   			if(totalDeudas[indice].cuotas[i].pagado==false){
	   				//actualización de totalDeudas
		   			totalDeudas[indice].cuotas[i].pagado=true;
		   			$scope.totalDeudas=totalDeudas;
		   			localStorageService.set('deudas',JSON.stringify(totalDeudas));

		   			//totalDeudas=JSON.parse(localStorageService.get('deudas'));
		   		
		   			capital_actual=capital_actual+cuota.valor;
		   			$scope.capital_actual=capital_actual;
					localStorageService.set('capital',JSON.stringify(capital_actual));
				}
	   		}

	   	
	   }

	

	   /*
	   //paga todas las cuotas de todas las deudas
	   $scope.pagarCuotas=function(cuota,deudor){

	   		var deudas=JSON.parse(localStorageService.get('deudas'));

			for(var i=0;i<deudas.length;i++){
				if(deudas[i].cliente.nombre_completo==deudor.nombre_completo){
					for(var j=0;j<deudas[i].cuotas.length;j++){
						if(deudas[i].cuotas[j].pagado==false){
							//actualizacion de las deudas de localstorage
							deudas[i].cuotas[j].pagado=true;
							localStorageService.set('deudas',JSON.stringify(deudas));

							//actualización del arreglo de totalDeudas
							totalDeudas=JSON.parse(localStorageService.get('deudas'));
	   						$scope.totalDeudas=totalDeudas;

	   						//actualización del capital
							capital_actual=capital_actual+cuota.valor;
							$scope.capital_actual=capital_actual;
							localStorageService.set('capital',JSON.stringify(capital_actual));

						
						}
					}
				}
			}

		}
		
	   
	   //arreglo de clientes clickeados para revisar deudas
	   /*
		var deudor=[];
		deudor=JSON.parse(localStorageService.get('deudor')) || [];
		$scope.deudor=deudor;


		$scope.agregarClienteDeudor=function(cliente){

			localStorageService.set('deudor',JSON.strongify(cliente));

			var nomCliente=$localStorage.deudor.nombre_completo;

			$localStorage.deudor=[];


			for(var i=0;i<$localStorage.deudas.length;i++){
				if($localStorage.deudas[i].cliente.nombre_completo==nomCliente){

					var prestamosDeudor=$localStorage.deudas[i];

					$localStorage.deudor=$localStorage.deudor.concat(prestamosDeudor);

					$scope.deudor=$localStorage.deudor;
				}
			}

		


		}

		*/

		

	


}

})();
