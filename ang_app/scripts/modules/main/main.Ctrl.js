angular.module('ang-app').controller('mainCtrl', ['$scope', '$http', 'DataSvc', '$timeout', function($scope, $http, DataSvc, $timeout) {
    window.mainCtrlScope = $scope;

    $scope.getPosts = () => {
        DataSvc.getPosts().then((posts) => {
            $scope.posts = posts;
        });
    };

    $scope.getPosts();


    $scope.newPost = (name, post) => {
        DataSvc.addNewPost({
            name: name,
            post: post
        }).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1000)
        });
    };

    $scope.showComments = (post) => {
        $scope.selectedPost = post;
    };

    $scope.newComment = (comment) => {
        comment.post_id = $scope.selectedPost.id;
        DataSvc.comment(comment).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1500);
        })
    };

}]);