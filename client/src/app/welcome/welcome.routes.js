routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app.welcome', {
      url: '/',
      template: require('./welcome.html'),
      controller: 'WelcomeController',
      controllerAs: 'vm'
    });
}
