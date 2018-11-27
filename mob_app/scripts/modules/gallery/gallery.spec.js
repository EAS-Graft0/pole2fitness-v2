describe('Controller: gallery', function() {
    beforeEach(module('app'));
    var galleryCtrl,
        scope;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        galleryCtrl = $controller('galleryCtrl', {
            $scope: scope
        });
    }));
    it('Should test something in galleryCtrl', function() {
        console.log('Your test for gallery')
    });
});