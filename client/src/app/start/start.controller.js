export default class StartController {
  constructor($state, $rootScope, Sessions) {
    this.$state = $state;
    this.$rootScope = $rootScope;

    this.Sessions = Sessions;
    this.form = {};
  }

  submitForm() {
    this.errors = undefined;

    this.Sessions.save({ session: this.form }, (res) => {
      this.$rootScope.currentUser = res.user;
      
      this.$state.go('app.explore');
      /*
       * console.log('success', res);
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
      this.errors = error.data.errors;

      /*
       * console.log('error', error);
       * error.data.errors = String
       *
       */
    });
  }
}

StartController.inject = ['$state', '$rootScope', 'Sessions'];
