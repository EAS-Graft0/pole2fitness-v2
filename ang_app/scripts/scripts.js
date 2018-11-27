angular.module('ang-app').controller('aboutCtrl', ['$scope', '$http', function ($scope, $http) {
    window.aboutCtrlScope = $scope
}])
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/about", {
        title: "about",
        templateUrl: "about/about.html",
        controller: "aboutCtrl"
    })
}])
angular.module('ang-app').controller('classesCtrl', ['$scope', '$http', 'DataSvc', '$timeout', function($scope, $http, DataSvc, $timeout) {
    window.classesCtrlScope = $scope

    DataSvc.getClasses().then((classes) => {
        $scope.classes = classes;
    });

    $scope.getNumber = (number) => {
        return new Array(number);
    };


    $scope.selectClass = (lesson) => {
        $scope.selectedClass = lesson;
        DataSvc.getClassSchedule(lesson.id).then((schedule) => {
            $scope.schedule = schedule;
            DataSvc.getClassInfo(lesson.id).then((attendees) => {
                $scope.attendees = attendees;
            });
        });
    };

    $scope.book = (booking) => {
        booking.class_id = $scope.selectedClass.id;
        DataSvc.book(booking).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1500);
        });
    };

}])
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/classes", {
        title: "classes",
        templateUrl: "classes/classes.html",
        controller: "classesCtrl"
    })
}])
angular.module('ang-app').controller('contactCtrl', ['$scope', '$http', 'DataSvc', function($scope, $http, DataSvc) {
    window.contactCtrlScope = $scope



}])
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/contact", {
        title: "contact",
        templateUrl: "contact/contact.html",
        controller: "contactCtrl"
    })
}])
angular.module('ang-app').controller('galleryCtrl', ['$scope', '$http', 'DataSvc', function($scope, $http, DataSvc) {
    window.galleryCtrlScope = $scope

    DataSvc.getImages().then((images) => {
        $scope.images = images;
    });

    $scope.viewImage = (index) => {
        $scope.index = index;
    };

}])
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/gallery", {
        title: "gallery",
        templateUrl: "gallery/gallery.html",
        controller: "galleryCtrl"
    })
}])
angular.module('ang-app').controller('locationCtrl', ['$scope', '$http', function($scope, $http) {
    window.locationCtrlScope = $scope

    var map;

    var myLatlng = new google.maps.LatLng(51.683069, -3.216005);


    // $scope.initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.683069,
            lng: -3.216005
        },
        zoom: 14
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Pole2Fitness - Planet Fitness - Aberbargoed'
    });
    // }


    $scope.initMap();
    // 

}])
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/location", {
        title: "location",
        templateUrl: "location/location.html",
        controller: "locationCtrl"
    })
}])
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
        $scope.post = post;
    };

    $scope.newComment = (comment) => {
        comment.post_id = $scope.post.id;
        DataSvc.comment(comment).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1500);
        })
    };

}]);
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/main", {
        title: "main",
        templateUrl: "main/main.html",
        controller: "mainCtrl"
    })
}])
angular.module('ang-app').factory('DataSvc', ['$http', '$q', function($http, $q) {
    return {
        getClasses: function getClasses() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/getClasses',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        getClassInfo: function getClassInfo(id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/getClassInfo?class_id=' + id,
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        getClassSchedule: function getClassSchedule(id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/getClassSchedule?class_id=' + id,
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        getImages: function getImages() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/getImages',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        getMessages: function getMessages() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/api/getMessages',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        viewMessage: function viewMessage(id) {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/api/viewMessage?id=' + id,
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        getPosts: function getPosts() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/api/getPosts',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        getRequest: function getRequest() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/api/getRequest',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        book: function book(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/book',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        startNewBlock: function startNewBlock(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/startNewBlock',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        sendMessage: function sendMessage(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/sendMessage',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        reply: function reply(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/reply',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        addNewPost: function addNewPost(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/addNewPost',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        comment: function comment(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/comment',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        },
        postRequest: function postRequest(body) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: '/api/postRequest',
                dataType: 'json',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                data: JSON.stringify(body)
            }).then(function(res) {
                deferred.resolve(res.data)
            }, function(res) {
                deferred.resolve(res.data)
            })
            return deferred.promise;
        }
    }
}])