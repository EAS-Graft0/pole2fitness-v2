angular.module('ang-app').controller('galleryCtrl', ['$scope', '$http', 'DataSvc', function($scope, $http, DataSvc) {
    window.galleryCtrlScope = $scope

    DataSvc.getImages().then((images) => {
        $scope.images = images;
    });

    $scope.viewImage = (index) => {
        $scope.index = index;
    };

}])