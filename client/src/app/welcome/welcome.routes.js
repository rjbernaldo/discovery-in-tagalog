export default function routes($stateProvider) {
  $stateProvider
    .state('app.welcome', {
      url: '/welcome',
      template: require('./welcome.html'),
      controller: 'WelcomeController',
      controllerAs: 'vm',
      data: {
        requireLogin: false
      }
    });
}

routes.$inject = ['$stateProvider'];
