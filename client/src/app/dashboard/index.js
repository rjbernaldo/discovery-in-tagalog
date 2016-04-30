import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './dashboard.routes';
import DashboardController from './dashboard.controller';

import Products from '../services/products.service';

export default angular.module('app.dashboard', [uirouter, Products])
  .config(routes)
  .controller('DashboardController', DashboardController)
  .name;
