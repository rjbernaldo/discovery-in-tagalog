import angular from 'angular';
import ngResource from 'angular-resource';

import Users from './users.factory';
import UserProducts from './userproducts.factory';
import Products from './products.factory';
import Sessions from './sessions.factory';

export default angular.module('factories', [ngResource])
  .factory('Users', Users)
  .factory('UserProducts', UserProducts)
  .factory('Products', Products)
  .factory('Sessions', Sessions)
  .name;
