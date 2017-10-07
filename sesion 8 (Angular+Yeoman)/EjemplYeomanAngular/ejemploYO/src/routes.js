angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('hola', {
      url: '/',
      component: 'hola'
    })
    .state('nuevoComponente',{
    	url: '/nuevoComponente',
    	component: 'nuevoComponente'


    });
}
