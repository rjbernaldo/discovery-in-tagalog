export default function UsersFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/users/:userId', { id: '@id' });
}

UsersFactory.inject = ['$rootScope', '$resource'];
