describe('Controller: admin', function() {
    beforeEach(module('app'));
    var adminCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        adminCtrl = $controller('adminCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in adminCtrl', function() {
        console.log('Your test for admin')
    });
});