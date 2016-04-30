routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('user', {
      url: '/user/:userId',
      template: require('./user.html'),
      controller: 'UserController',
      controllerAs: 'vm'
    });
}
