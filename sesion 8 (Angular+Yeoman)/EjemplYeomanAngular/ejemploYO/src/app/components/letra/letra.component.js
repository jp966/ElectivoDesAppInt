(function() {
	'use strict';
	angular
		.module('app')
		.component('letra', {
			templateUrl: 'app/components/letra/letra.component.html',
			controller: letraCtrl,
			controllerAs: 'vm'
		});

	letraCtrl.$inject=['$stateParams','letraService'];

	function letraCtrl($stateParams,letraService) {

		var vm=this;

		vm.artist=$stateParams.artist;

		vm.title=$stateParams.title;

	 	letraService.get({artist: vm.artist, title:vm.title}).$promise.then(function(data){
	 		vm.letra=data.lyrics;
	 	});
	}
})();