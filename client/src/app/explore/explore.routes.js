routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app.explore', {
      url: '/explore',
      template: require('./explore.html'),
      controller: 'ExploreController',
      controllerAs: 'vm',
      data: {
        requireLogin: false
      }
    });
}
