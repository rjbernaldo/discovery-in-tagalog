export default function routes($stateProvider) {
  $stateProvider
    .state('welcome.signup', {
      url: 'signup',
      template: require('./signup.html'),
      controller: 'SignupController',
      controllerAs: 'vm'
    });
}

routes.$inject = ['$stateProvider'];
