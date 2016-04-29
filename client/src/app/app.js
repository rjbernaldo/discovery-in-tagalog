import angular from 'angular';

import 'bootstrap-loader';
import '../style/app.css';

const MODULE_NAME = 'app';

// let app = () => {
//     return {
//         template: require('./app.html'),
//         controller: 'AppController',
//         controllerAs: 'vm'
//     }
// };
//
// class AppController {
//     constructor() {
//         this.url = 'https://google.com'
//     }
// }

let routerConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      temlate: 'partial-home'
    })
    .state('about', {

    })

}


angular.module(MODULE_NAME, ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', routerConfig]);
    // .directive('app', app)
    // .controller('AppController', AppController);

export default MODULE_NAME;
