routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('product', {
      url: '/product/:productId',
      template: require('./product.html'),
      controller: 'ProductController',
      controllerAs: 'vm'
    });
}
