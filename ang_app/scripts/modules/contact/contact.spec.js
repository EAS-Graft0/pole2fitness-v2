describe('Controller: contact', function() {
    beforeEach(module('ang-app'));
    var contactCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        contactCtrl = $controller('contactCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in contactCtrl', function() {
        console.log('Your test for contact')
    });
});