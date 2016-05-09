routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app.details', {
      url: '/explore/:id',
      template: require('./details.html'),
      controller: 'DetailsController',
      controllerAs: 'vm',
      data: {
        requireLogin: false
      }
    });
}
