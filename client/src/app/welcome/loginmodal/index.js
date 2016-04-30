import angular from 'angular';
import modal from 'angular-ui-bootstrap/src/modal';

import LoginModalController from './loginmodal.controller';
import LoginModalService from './loginmodal.service';

export default angular.module('services.loginmodal', [modal])
  .service('LoginModalService', LoginModalService)
  .name;
