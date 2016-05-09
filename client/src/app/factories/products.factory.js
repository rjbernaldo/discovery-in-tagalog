export default function ProductsFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/products/:id', { id: '@id' });
}

ProductsFactory.inject = ['$rootScope', '$resource'];
