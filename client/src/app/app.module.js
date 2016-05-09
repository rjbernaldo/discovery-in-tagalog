const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap-loader';
import '../style/app.css';

import AppController from './app.controller';
import config from './app.config';
import routes from './app.routes';
import run from './app.run';

import authentication from './authentication';
import home from './home';
import explore from './explore';
import start from './start';

import factories from './factories'

angular.module(MODULE_NAME, [uirouter, authentication, home, explore, start, factories])
  .controller('AppController', AppController)
  .config(config)
  .config(routes)
  .run(run);

export default MODULE_NAME;
