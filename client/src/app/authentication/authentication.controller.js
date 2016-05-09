export default class AuthenticationController {
  constructor($state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$state.go('app.authentication.login');
  }
}

AuthenticationController.inject = ['$state', '$rootScope'];
