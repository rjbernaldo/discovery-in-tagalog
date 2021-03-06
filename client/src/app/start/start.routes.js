export default function routes($stateProvider) {
  $stateProvider
    .state('app.start', {
      url: '/start',
      template: require('./start.html'),
      controller: 'StartController',
      controllerAs: 'vm',
      data: {
        requireLogin: false
      }
    });
}

routes.$inject = ['$stateProvider'];
