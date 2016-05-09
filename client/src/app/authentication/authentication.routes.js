export default function routes($stateProvider) {
  $stateProvider
    .state('app.authentication', {
      url: '/authentication',
      template: require('./authentication.html'),
      controller: 'AuthenticationController',
      controllerAs: 'vm',
      data: {
        requireLogin: false
      }
    });
}

routes.$inject = ['$stateProvider'];
