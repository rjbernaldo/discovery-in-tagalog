import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './dashboard.routes';
import DashboardController from './dashboard.controller';

export default angular.module('app.dashboard', [uirouter])
  .config(routes)
  .controller('DashboardController', DashboardController)
  .name;
