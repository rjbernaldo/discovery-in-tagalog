import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './product.routes';
import DashboardController from './product.controller';

export default angular.module('app.product', [uirouter])
  .config(routes)
  .controller('ProductController', ProeuctController)
  .name;
