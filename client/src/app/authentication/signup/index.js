import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './signup.routes';
import SignupController from './signup.controller';

export default angular.module('authentication.signup', [uirouter])
  .config(routes)
  .controller('SignupController', SignupController)
  .name;
