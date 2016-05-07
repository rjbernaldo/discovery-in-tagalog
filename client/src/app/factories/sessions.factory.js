export default function SessionsFactory($rootScope, $resource) {
  return $resource($rootScope.apiUrl + '/sessions');
}

SessionsFactory.inject = ['$rootScope', '$resource'];
