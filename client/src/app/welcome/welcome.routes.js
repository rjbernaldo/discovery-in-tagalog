export default function routes($stateProvider) {
  $stateProvider
    .state('welcome', {
      url: '/',
      template: require('./welcome.html'),
      controller: 'WelcomeController',
      controllerAs: 'vm',
      data: {
        requireLogin: false
      }
    });
}

routes.$inject = ['$stateProvider'];
