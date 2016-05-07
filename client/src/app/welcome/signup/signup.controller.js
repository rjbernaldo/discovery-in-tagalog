export default class SignupController {
  constructor($state) {
    this.state = $state;
    this.form = {};
  }

  submitForm() {
    console.log(this.form);
  }
}

SignupController.inject = ['$state'];
