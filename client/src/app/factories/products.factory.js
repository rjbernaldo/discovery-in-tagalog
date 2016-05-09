export default function ProductsFactory($rootScope, $resource) {
  var url = $rootScope.apiUrl + '/products/:id';
  var params = { id: '@id' };
  var actions = {
    query: { method: 'GET', isArray: false },
  };

  return $resource(url, params, actions);
}

ProductsFactory.inject = ['$rootScope', '$resource'];
