export default function routes($stateProvider) {
  $stateProvider
    .state('app.authentication.login', {
      url: '/login',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];
