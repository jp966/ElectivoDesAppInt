'use strict';
(function () {
	var direc = angular.module('directives-example',[]);
	direc.directive('miPanel1',function(){
	return {
		//se usa como atributo en un div
		restric : 'A',
		templateUrl : 'app/views/panel.html'
		}
	});
	direc.directive('miPanel2',function(){
	return {
		//se crea el elemento
		restric : 'E',
		templateUrl : 'app/views/panel.html'
		}
	});
})();