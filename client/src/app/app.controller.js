export default class AppController {
  constructor($state, $rootScope) {
    this.$state = $state;
    this.$rootScope = $rootScope;
  }
}

AppController.inject = ['$state', '$rootScope'];
