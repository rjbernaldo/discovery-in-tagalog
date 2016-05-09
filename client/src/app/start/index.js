import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './start.routes';
import StartController from './start.controller';

export default angular.module('app.start', [uirouter])
  .config(routes)
  .controller('StartController', StartController)
  .name;
