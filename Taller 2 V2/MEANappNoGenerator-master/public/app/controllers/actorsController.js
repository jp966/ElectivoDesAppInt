
//Instancia de angular
var home = angular.module('mainModule');


//Se crea un controlador con su funcion callback
home.controller('clientController', ['$scope', 'localStorageService',clientController]);



//Se definen todos aquellos elemtentos que seran utilizados por el nodo del DOM que
//tenga la instancia de este controlador
function clientController($scope, localStorageService){


	if(!($scope.clientes = JSON.parse(localStorageService.get('clientes')))){
		$scope.clientes = [];
	}

	/*
	$scope.nuevoCliente = { nombreCompleto: '', telefono: 0 };
	*/

	 var capital_actual=JSON.parse(localStorageService.get('capital')) || 10000000;
	 $scope.capital_actual=capital_actual;

	 $scope.repetido=false;

	$scope.nuevoCliente=
			{
				nombre_completo:'',
				email:'',
				telefono:''
			};

	$scope.agregarCliente = function(){
	
		for(var i=0;i<$scope.clientes.length;i++){
			if($scope.clientes[i].nombre_completo+""+$scope.clientes[i].email+""+$scope.clientes[i].telefono==
				$scope.nuevoCliente.nombre_completo+""+$scope.nuevoCliente.email+""+$scope.nuevoCliente.telefono){
				alert("El cliente ya está registrado");
				$scope.repetido=true;
				
			}else{
				$scope.repetido=false;
			}
		}
		if($scope.repetido===false){
			$scope.clientes.push($scope.nuevoCliente);
			localStorageService.set('clientes', JSON.stringify($scope.clientes));
			
			$scope.nuevoCliente=
				{
					nombre_completo:'',
					email:'',
					telefono:''
				};

		}
	}



	


}


