export default function UsersFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/users');
}

UsersFactory.inject = ['$rootScope', '$resource'];
