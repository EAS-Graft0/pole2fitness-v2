describe('Controller: main', function() {
    beforeEach(module('ang-app'));
    var mainCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in mainCtrl', function() {
        console.log('Your test for main')
    });
});