import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './welcome.routes';
import WelcomeController from './welcome.controller';

import Login from './login';
import Signup from './signup';

export default angular.module('welcome', [uirouter, Login, Signup])
  .config(routes)
  .controller('WelcomeController', WelcomeController)
  .name;
