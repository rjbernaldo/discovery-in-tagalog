export default class LoginController {
  constructor($state, Sessions) {
    this.state = $state;
    this.Sessions = Sessions;
    this.form = {};
  }

  submitForm() {
    this.Sessions.save({ session: this.form }, (res) => {
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
       * error.data.errors = String
       *
       */
    });
  }
}

LoginController.inject = ['$state', 'Sessions'];
