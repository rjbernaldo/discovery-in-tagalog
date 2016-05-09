import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './details.routes';
import DetailsController from './details.controller';

export default angular.module('app.explore.details', [uirouter])
  .config(routes)
  .controller('DetailsController', DetailsController)
  .name;
