export default class WelcomeController {
  constructor($state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
  }

  login() {
    this.$state.go('welcome.login');
  }
}

WelcomeController.inject = ['$state', '$rootScope'];
