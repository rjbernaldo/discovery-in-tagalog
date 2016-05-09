export default class AppController {
  constructor($state, $rootScope, Sessions) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.Sessions = Sessions;
  }

  logout() {
    this.Sessions.delete({ id: this.$rootScope.currentUser.auth_token }, (res) => {
      this.$rootScope.currentUser = undefined;
      
      this.$state.go('app.authentication.login');
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

AppController.inject = ['$state', '$rootScope', 'Sessions'];
