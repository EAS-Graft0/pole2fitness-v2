angular.module('mobApp').controller('homeCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', '$http', 'DataSvc', '$timeout', function($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory, $http, DataSvc, $timeout) {
    window.homeCtrlScope = $scope;
    $scope.modals = {};
    $scope.replying;

    $scope.getPosts = () => {
        DataSvc.getPosts().then((posts) => {
            $scope.posts = posts;
        });
    };

    $scope.getPosts();

    $scope.newComment = (name, comment, id) => {
        DataSvc.comment({
            name: name,
            comment: comment,
            post_id: id
        }).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1000);
        })
    };

    $scope.showContact = () => {
        $ionicModal.fromTemplateUrl('contact/contact.html', {
            scope: $scope,
            animation: 'slide-in-left'
        }).then(function(modal) {
            $scope.modals.contactModal = modal;
            $scope.modals.contactModal.show();
        });
    };

    $scope.sendMessage = (name, email, message) => {
        DataSvc.sendMessage({
            name: name,
            email: email,
            message: message
        }).then((res) => {
            $scope.messageResponse = res;
        });
    };

    $scope.viewPost = (post) => {
        $scope.post = post;
        $ionicModal.fromTemplateUrl('home/post.html', {
            scope: $scope,
            animation: 'slide-in-left'
        }).then(function(modal) {
            $scope.modals.postModal = modal;
            $scope.modals.postModal.show();
        });
    };


}])