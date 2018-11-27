angular.module('mobApp').controller('galleryCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', 'DataSvc', function($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory, DataSvc) {
    window.galleryCtrlScope = $scope;

    DataSvc.getImages().then((images) => {
        $scope.images = images;
    });

    $scope.options = {
        loop: false,
        effect: 'fade',
        speed: 500,
    };


}])