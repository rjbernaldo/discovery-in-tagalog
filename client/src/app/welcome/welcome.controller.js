export default class WelcomeController {
  constructor($state) {
    this.state = $state;
  }

  login() {
    this.state.go('welcome.login');
  }
}

WelcomeController.inject = ['$state'];
