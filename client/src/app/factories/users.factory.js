export default function UsersFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/sessions');
}

UsersFactory.inject = ['$rootScope', '$resource'];
