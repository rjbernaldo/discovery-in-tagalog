export default class SignupController {
  constructor($state) {
    this.state = $state;
  }
}

SignupController.inject = ['$state'];
