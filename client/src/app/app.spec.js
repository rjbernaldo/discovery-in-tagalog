import app from './app.module'

describe('app', () => {
    describe('AppController', () => {
        let controller;

        beforeEach(() => {
            angular.mock.module(app);

            angular.mock.inject(($controller) => {
                controller = $controller('AppController', {});
            });
        });

        it('should contain the starter url', () => {
            expect(controller.url).toBe('https://google.com');
        });
    });
});
