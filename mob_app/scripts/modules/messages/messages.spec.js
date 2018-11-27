describe('Controller: messages', function() {
    beforeEach(module('app'));
    var messagesCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        messagesCtrl = $controller('messagesCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in messagesCtrl', function() {
        console.log('Your test for messages')
    });
});