(function() {
	'use strict';
	angular
		.module('app')
		.component('hola', {
			templateUrl: 'app/components/Hola/hola.component.html',
			controller: holaCtrl,
			controllerAs: 'vm'
		});

	function holaCtrl() {
		// Con vm = this, hacemos que se haga referencia al controlador por el 'this' y queda más comodo 
		// y unificado al mirar el html
		var vm = this;
		vm.mensaje = "Alonso";
	}
})();