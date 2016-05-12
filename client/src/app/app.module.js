const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap-loader';
import '../style/app.css';
import '../style/grayscale.css';

import AppController from './app.controller';
import config from './app.config';
import routes from './app.routes';
import run from './app.run';

import Authentication from './authentication';
import Home from './home';
import Explore from './explore';
import Details from './details';
import Start from './start';
import Factories from './factories'

angular.module(MODULE_NAME, [uirouter, Authentication, Home, Explore, Details, Start, Factories])
  .controller('AppController', AppController)
  .config(config)
  .config(routes)
  .run(run);

export default MODULE_NAME;
