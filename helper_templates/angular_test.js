describe('Controller: <%= name %>', function() {
    beforeEach(module('app'));
    var <%= name %>Ctrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        <%= name %>Ctrl = $controller('<%= name %>Ctrl', {
            $scope: scope
        });
    }));
    it('Should test something in <%= name %>Ctrl', function() {
        console.log('Your test for <%= name %>')
    });
});