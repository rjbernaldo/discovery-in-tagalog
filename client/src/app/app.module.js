const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap-loader';
import '../style/app.css';

import config from './app.config'

angular.module(MODULE_NAME, [uirouter])
  .config(config);

export default MODULE_NAME;
