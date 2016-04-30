import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './user.routes';
import UserController from './user.controller';

export default angular.module('app.user', [uirouter])
  .config(routes)
  .controller('UserController', UserController)
  .name;
