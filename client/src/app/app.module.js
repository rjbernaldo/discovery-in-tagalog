const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap-loader';
import '../style/app.css';

import config from './app.config';
import routes from './app.routes';
import run from './app.run';
import welcome from './welcome';
import dashboard from './dashboard';
import explore from './explore';

angular.module(MODULE_NAME, [uirouter, welcome, dashboard, explore])
  .config(config)
  .config(routes)
  .run(run); // move this to factory

export default MODULE_NAME;
