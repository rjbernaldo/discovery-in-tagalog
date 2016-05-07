export default function run($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;

    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();

      $state.go('welcome');
    }
  });
}

run.$inject = ['$rootScope', '$state'];
