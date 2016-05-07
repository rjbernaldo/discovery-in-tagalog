export default function routes($stateProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      template: require('./app.html'),
      controller: 'AppController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];
