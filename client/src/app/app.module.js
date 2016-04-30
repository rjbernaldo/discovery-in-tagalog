const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap-loader';
import '../style/app.css';

import config from './app.config'
import dashboard from './dashboard'
import explore from './explore'

angular.module(MODULE_NAME, [uirouter, dashboard, explore])
  .config(config);

export default MODULE_NAME;
