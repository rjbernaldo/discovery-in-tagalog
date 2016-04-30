import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './welcome.routes';
import WelcomeController from './welcome.controller';

import LoginModal from './loginmodal';

export default angular.module('app.welcome', [uirouter, LoginModal])
  .config(routes)
  .controller('WelcomeController', WelcomeController)
  .name;
