angular.module('mobApp').controller('classesCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', '$http', 'DataSvc', function($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory, $http, DataSvc) {
    window.classesCtrlScope = $scope;

    $scope.modals = {};
    $scope.select = (Class) => {
        $scope.selectedClass = Class;
    };

    $scope.getNumber = function(num) {
        return new Array(num);
    };

    $scope.showDetails = (selectedClass) => {
        $ionicModal.fromTemplateUrl('classes/details_modal.html', {
            scope: $scope,
            animation: 'slide-in-left'
        }).then(function(modal) {
            $scope.modals.detailsModal = modal;
            $scope.modals.detailsModal.show();
        });
    };

    $scope.bookClass = (id, name, email) => {
        DataSvc.book({
            class_id: id,
            name: name,
            email: email
        }).then((res) => {
            if (res.insertId) {
                $scope.booking = 'success';
            } else {
                $scope.error = 'Failed to book, please contact Lee';
            }
        })
    };

    DataSvc.getClasses().then((classes) => {
        $scope.classes = classes;
    });

    $scope.showTerms = () => {
        $scope.disclaimer = true;
        $ionicModal.fromTemplateUrl('classes/terms_modal.html', {
            scope: $scope,
            animation: 'slide-in-left'
        }).then(function(modal) {
            $scope.modals.termsModal = modal;
            $scope.modals.termsModal.show();
        });
    };

}]);