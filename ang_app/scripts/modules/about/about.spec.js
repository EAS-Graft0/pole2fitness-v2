describe('Controller: about', function() {
    beforeEach(module('ang-app'));
    var aboutCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        aboutCtrl = $controller('aboutCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in aboutCtrl', function() {
        console.log('Your test for about')
    });
});