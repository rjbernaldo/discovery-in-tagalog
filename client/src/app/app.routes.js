routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      template: '<ui-view/>',
      data: {
        // requireLogin: false
      }
    });
}
