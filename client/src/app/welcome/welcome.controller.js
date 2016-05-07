export default class WelcomeController {
  constructor($state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$state.go('app.welcome.login');
  }
}

WelcomeController.inject = ['$state', '$rootScope'];
