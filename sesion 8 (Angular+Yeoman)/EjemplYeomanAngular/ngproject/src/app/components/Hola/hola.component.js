(function(){

'use strict';

angular
.module('app')
.component('hola',{
	//objeto js
	templateUrl: 'app/components/Hola/hola.component.html',
	controller: holaCtrl,
	//alias del controlador dentro de la vista
	controllerAs: 'vm'

});
//esta funcion sera el controlador
function holaCtrl(){
	//hara referencia al controlador
	var vm = this;

	vm.mensaje = "buenas";


}


})();