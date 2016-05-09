export default function UserProductsFactory($rootScope, $resource) {
  var url = $rootScope.apiUrl + '/users/' + $rootScope.currentUser.id + '/products/:id';
  var params = { id: '@id' };
  var headers = { 'Authorization': $rootScope.currentUser.auth_token };
  var actions = {
    save: { method: 'POST', headers: headers },
    update: { method: 'PUT', headers: headers }
  };

  return $resource(url, params, actions);
}

UserProductsFactory.inject = ['$rootScope', '$resource'];
