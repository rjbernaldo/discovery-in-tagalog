export default function config($urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

config.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider'];
