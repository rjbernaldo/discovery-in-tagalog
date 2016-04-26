import angular from 'angular';

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppController',
        controllerAs: 'vm'
    }
};

class AppController {
    constructor() {
        this.url = 'https://google.com'
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppController', AppController);

export default MODULE_NAME;
