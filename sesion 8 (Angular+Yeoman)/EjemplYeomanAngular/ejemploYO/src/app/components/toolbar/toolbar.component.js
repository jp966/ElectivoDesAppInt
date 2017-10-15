(function() {
	'use strict';
	angular
		.module('app')
		.component('myToolbar', {
			templateUrl: 'app/components/toolbar/toolbar.component.html',
			controller: toolbarCtrl,
			controllerAs: 'vm'
		});

	function toolbarCtrl() {
		
	}
})();

//https://api.lyrics.ovh/v1