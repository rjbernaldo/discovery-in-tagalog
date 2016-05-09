export default class SignupController {
  constructor($state, $rootScope, Users) {
    this.$state = $state;
    this.$rootScope = $rootScope;

    this.Users = Users;
    this.form = {};
  }

  submitForm() {
    this.errors = undefined;

    this.Users.save({ user: this.form }, (res) => {
      this.$rootScope.currentUser = res.user;
      
      this.$state.go('app.dashboard');
      /*
       * console.log('success', res);
       * auth_token: "-AKU3QT3TYLwjB_XZ5mw"
       * created_at: "2016-05-07T06:05:36.671Z"
       * email: "test+7@test.com"
       * id: 7
       * product_ids: Array[0]
       * updated_at: "2016-05-07T06:05:36.671Z"
       *
       */
    }, (error) => {
      this.errors = error.data.errors;
      console.log(this.errors);
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

SignupController.inject = ['$state', '$rootScope', 'Users'];
