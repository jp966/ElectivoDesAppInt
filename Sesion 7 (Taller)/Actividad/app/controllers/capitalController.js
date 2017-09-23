'use strict';
(function () {
	var controlCapital = angular.module('app');
	controlCapital.controller('capitalController', ['$scope','$localStorage', function($scope,$localStorage){


		var capital_actual=$localStorage.capital || 10000000;

		$scope.capital_actual=capital_actual;

		 $scope.deudas=[{
	       cliente: {
	               nombre_completo: '',
	               email: '',
	               telefono: ''
	           },
	       cuota_id: 0,
	       cuotas: [
	           {
	               valor: 0,
	               pagado: false
	           }
	       ],
	       prestamo: 0,
	       total:0
	   }];

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

		

	
	   $scope.agregarDeuda = function(form) {

	   	if(form.$valid){
	  	 	
	  	 	//DEUDAS DE CLIENTES	
	   		totalDeudas.push($scope.deudas);

			$scope.totalDeudas = totalDeudas;
			
			$localStorage.deudas = totalDeudas;

			//CAPITAL
			capital_actual=capital_actual-$scope.deudas.prestamo;
			$scope.capital_actual=capital_actual;
			$localStorage.capital=capital_actual;

			
			 $scope.deudas=[{
		       cliente: {
		               nombre_completo: '',
		               email: '',
		               telefono: ''
		           },
		       cuota_id: 0,
		       cuotas: [
		           {
		               valor: 0,
		               pagado: false
		           }
		       ],
		       prestamo: 0,
		       total:0
		   }];

			}

		};

		
	
	}]);
})();