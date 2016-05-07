export default class LoginController {
  constructor($state) {
    this.state = $state;
  }
}

LoginController.inject = ['$state'];
