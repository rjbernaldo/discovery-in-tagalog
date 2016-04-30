routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('explore', {
      url: '/explore',
      template: require('./explore.html'),
      controller: 'ExploreController',
      controllerAs: 'vm'
    });
}
