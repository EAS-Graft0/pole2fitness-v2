describe('Controller: classes', function() {
    beforeEach(module('app'));
    var classesCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        classesCtrl = $controller('classesCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in classesCtrl', function() {
        console.log('Your test for classes')
    });
});