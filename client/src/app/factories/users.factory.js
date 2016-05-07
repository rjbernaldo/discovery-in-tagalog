export default function AuthFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/users/:user');
}

AuthFactory.inject = ['$rootScope', '$resource'];
