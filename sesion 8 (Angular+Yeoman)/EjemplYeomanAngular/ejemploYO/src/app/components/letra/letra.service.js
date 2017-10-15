(function() {
	'use strict';

	angular
	.module('app')
	.service('letraService', letraService);

	letraService.$inject=['$resource'];

	function letraService($resource){
		return $resource('https://api.lyrics.ovh/v1/:artist/:title',{artist:'@artist',title:'@title'});

	}




})();