describe('Controller: location', function() {
    beforeEach(module('app'));
    var locationCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        locationCtrl = $controller('locationCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in locationCtrl', function() {
        console.log('Your test for location')
    });
});