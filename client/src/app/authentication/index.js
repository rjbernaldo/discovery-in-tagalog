import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './authentication.routes';
import AuthenticationController from './authentication.controller';

import Login from './login';
import Signup from './signup';

export default angular.module('authentication', [uirouter, Login, Signup])
  .config(routes)
  .controller('AuthenticationController', AuthenticationController)
  .name;
