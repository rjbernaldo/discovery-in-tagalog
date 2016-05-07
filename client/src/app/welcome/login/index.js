import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './login.routes';
import LoginController from './login.controller';

export default angular.module('welcome.login', [uirouter])
  .config(routes)
  .controller('LoginController', LoginController)
  .name;
