export default function run($rootScope, $state) {
  $rootScope.apiUrl = 'http://api.localhost\\:3000';

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();

      $state.go('app.welcome');
    }
  });

  $rootScope.$watch('currentUser', () => {
    $rootScope.isLoggedIn = $rootScope.currentUser !== undefined;
  });
}

run.$inject = ['$rootScope', '$state'];
