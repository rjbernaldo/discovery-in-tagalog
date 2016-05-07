export default class SignupController {
  constructor($state, Users) {
    this.state = $state;
    this.Users = Users;
    this.form = {};
  }

  submitForm() {
    this.Users.save({ user: this.form }, (res) => {
      console.log('success', res);
      /*
       * res.user
       * auth_token: "-AKU3QT3TYLwjB_XZ5mw"
       * created_at: "2016-05-07T06:05:36.671Z"
       * email: "test+7@test.com"
       * id: 7
       * product_ids: Array[0]
       * updated_at: "2016-05-07T06:05:36.671Z"
       *
       */
    }, (error) => {
      console.log('error', error);
      /*
       * error.data.errors = {
       *    email: [],
       *    password: [],
       *    password_confirmation: {]
       * }
       *
       */
    });
  }
}

SignupController.inject = ['$state', 'Users'];
