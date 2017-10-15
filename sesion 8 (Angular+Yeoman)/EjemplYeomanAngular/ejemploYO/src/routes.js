angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('app', {
      url: '/',
      templateUrl: 'app/containers/buscar.html'
    })

    .state('hola', {
      url: '/',
      component: 'hola'
    })
    .state('nuevoComponente',{
    	url: '/nuevoComponente',
    	component: 'nuevoComponente'


    })
    .state('letra',{
      //artist y tittle son los parámetros
     url:'/letra/:artist/:title',
     component:'letra'

    });
}
