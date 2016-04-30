config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      template: 'partial-home'
    })
    .state('about', {

    })
}
