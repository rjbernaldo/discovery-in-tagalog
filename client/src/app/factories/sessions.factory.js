export default function SessionsFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/sessions/:id');
}

SessionsFactory.inject = ['$rootScope', '$resource'];
