export default function routes($stateProvider) {
  $stateProvider
    .state('welcome', {
      url: '/',
      template: require('./welcome.html'),
      controller: 'WelcomeController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];
