import angular from 'angular';
import ngResource from 'angular-resource';

import Users from './users.factory';

export default angular.module('factories', [ngResource])
  .factory('Users', Users)
  .name;
