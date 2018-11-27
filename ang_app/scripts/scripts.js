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
angular.module('ang-app').controller('adminCtrl', ['$scope', '$http', 'DataSvc', '$timeout', function($scope, $http, DataSvc, $timeout) {
    window.adminCtrlScope = $scope;


    $scope.newPost = (post) => {
        DataSvc.addNewPost(post).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1000)
        });
    };


    $scope.startNewBlock = (date) => {

        date.setHours(18, 00, 00);
        var classes = {}

        /* Class 1 */
        classes.class1 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        };

        classes.class1.date2.setDate(classes.class1.date1.getDate(classes.class1.date1) + 7);
        classes.class1.date3.setDate(classes.class1.date1.getDate(classes.class1.date1) + 14);
        classes.class1.date4.setDate(classes.class1.date1.getDate(classes.class1.date1) + 21);
        classes.class1.date5.setDate(classes.class1.date1.getDate(classes.class1.date1) + 28);
        // dates[0].push(classes.class1);
        /* Class 1 */

        /* Class 2 */
        date.setHours(19, 05, 00);

        classes.class2 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        };

        classes.class2.date2.setDate(classes.class2.date1.getDate(classes.class2.date1) + 7);
        classes.class2.date3.setDate(classes.class2.date1.getDate(classes.class2.date1) + 14);
        classes.class2.date4.setDate(classes.class2.date1.getDate(classes.class2.date1) + 21);
        classes.class2.date5.setDate(classes.class2.date1.getDate(classes.class2.date1) + 28);
        // dates[0].push(class2);
        /* Class 2 */

        /* Class 3 */
        date.setDate(date.getDate() + 1);
        date.setHours(19, 00, 00);

        classes.class3 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class3.date2.setDate(classes.class3.date1.getDate(classes.class3.date1) + 7);
        classes.class3.date3.setDate(classes.class3.date1.getDate(classes.class3.date1) + 14);
        classes.class3.date4.setDate(classes.class3.date1.getDate(classes.class3.date1) + 21);
        classes.class3.date5.setDate(classes.class3.date1.getDate(classes.class3.date1) + 28);

        /* Class 3 */

        /* Class 4 */

        date.setDate(date.getDate() + 1);
        date.setHours(18, 30, 00);

        classes.class4 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class4.date2.setDate(classes.class4.date1.getDate(classes.class4.date1) + 7);
        classes.class4.date3.setDate(classes.class4.date1.getDate(classes.class4.date1) + 14);
        classes.class4.date4.setDate(classes.class4.date1.getDate(classes.class4.date1) + 21);
        classes.class4.date5.setDate(classes.class4.date1.getDate(classes.class4.date1) + 28);

        /* Class 4 */

        /* Class 5 */

        date.setHours(19, 30, 00);

        classes.class5 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class5.date2.setDate(classes.class5.date1.getDate(classes.class5.date1) + 7);
        classes.class5.date3.setDate(classes.class5.date1.getDate(classes.class5.date1) + 14);
        classes.class5.date4.setDate(classes.class5.date1.getDate(classes.class5.date1) + 21);
        classes.class5.date5.setDate(classes.class5.date1.getDate(classes.class5.date1) + 28);

        /* Class 5 */

        /* Class 6 */

        date.setDate(date.getDate() + 1);
        date.setHours(19, 00, 00);

        classes.class6 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class6.date2.setDate(classes.class6.date1.getDate(classes.class6.date1) + 7);
        classes.class6.date3.setDate(classes.class6.date1.getDate(classes.class6.date1) + 14);
        classes.class6.date4.setDate(classes.class6.date1.getDate(classes.class6.date1) + 21);
        classes.class6.date5.setDate(classes.class6.date1.getDate(classes.class6.date1) + 28);

        /* Class 6 */

        date = date.toISOString().substring(0, 19)
        DataSvc.startNewBlock(classes).then((res) => {
            console.log(res);
            $scope.messageResponse = "New block started!";
            $timeout(() => {
                location.reload();
            }, 1500);
        });
    };


}]);
angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/admin", {
        title: "admin",
        templateUrl: "admin/admin.html",
        controller: "adminCtrl"
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