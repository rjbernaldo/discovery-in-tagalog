import angular from 'angular';
import ngResource from 'angular-resource';

import Users from './users.factory';
import Sessions from './sessions.factory';

export default angular.module('factories', [ngResource])
  .factory('Users', Users)
  .factory('Sessions', Sessions)
  .name;
