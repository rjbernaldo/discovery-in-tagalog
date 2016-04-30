import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './explore.routes';
import ExploreController from './explore.controller';

export default angular.module('app.explore', [uirouter])
  .config(routes)
  .controller('ExploreController', ExploreController)
  .name;
