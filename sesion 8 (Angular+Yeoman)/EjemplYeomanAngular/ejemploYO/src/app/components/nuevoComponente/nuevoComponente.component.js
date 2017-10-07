(function() {
	'use strict';
	angular
		.module('app')
		.component('nuevoComponente', {
			templateUrl: 'app/components/nuevoComponente/nuevoComponente.component.html',
			controller: nuevoComponenteCtrl,
			controllerAs: 'vm'
		});

	function nuevoComponenteCtrl() {
		// Con vm = this, hacemos que se haga referencia al controlador por el 'this' y queda más comodo 
		// y unificado al mirar el html
		var vm = this;
		vm.mensaje = "Nuevo Componente";
	}
})();