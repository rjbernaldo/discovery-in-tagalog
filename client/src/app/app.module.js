const MODULE_NAME = 'app';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap-loader';
import '../style/app.css';

import config from './app.config'
import routes from './app.routes'
import dashboard from './dashboard'
import explore from './explore'

angular.module(MODULE_NAME, [uirouter, dashboard, explore])
  .config(config)
  .config(routes)
  .run(runBlock); // move this to factory

runBlock.inject = ['$rootScope'];

function runBlock($rootScope) {
  // $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
  //   var requireLogin = toState.data.requireLogin;
  //
  //   if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
  //     event.preventDefault();
  //     // call login modal
  //   }
  // });
}

export default MODULE_NAME;
