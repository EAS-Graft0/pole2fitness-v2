angular.module('mobApp').controller('adminCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', 'DataSvc', function($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory, DataSvc) {
    window.adminCtrlScope = $scope;

    $scope.modals = {};
    $scope.todaysDate = new Date();

    $scope.showMessages = () => {
        $ionicModal.fromTemplateUrl('messages/messages.html', {
            scope: $scope,
            animation: 'slide-in-left'
        }).then(function(modal) {
            $scope.modals.messagesModal = modal;
            $scope.modals.messagesModal.show();
            DataSvc.getMessages().then((messages) => {
                console.log(messages)
                $scope.messages = messages;
            });
        });
    };

    $scope.viewMessage = (message) => {
        $scope.message = message;
        if (message.opened == null) {
            DataSvc.viewMessage(message.id);
        }
        $ionicModal.fromTemplateUrl('messages/viewMessage.html', {
            scope: $scope,
            animation: 'slide-in-left'
        }).then(function(modal) {
            $scope.modals.viewMessageModal = modal;
            $scope.modals.viewMessageModal.show();
        });
    };

    $scope.reply = (subject, email, message) => {
        DataSvc.reply({
            subject: subject,
            message: message,
            email: email
        }).then((res) => {
            $scope.messageResponse = res;
        })
    };

    $scope.addNewPost = (name, post) => {
        console.log(name, post)
        DataSvc.addNewPost({
            name: name,
            post: post
        }).then((res) => {
            $scope.messageResponse = res;
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
        });
    };

}])
angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('admin', {
        url: "/admin"
        , templateUrl: "admin/admin.html"
        , controller: 'adminCtrl'
    })
})
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
angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('classes', {
        url: "/classes"
        , templateUrl: "classes/classes.html"
        , controller: 'classesCtrl'
    })
})
angular.module('mobApp').controller('contactCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', '$http', function($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory, $http) {
    // window.contact.CtrlScope = $scope;

}])
angular.module("mobApp").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.contact', {
        url: "/contact",
        views: {
            'menuContent': {
                templateUrl: "contact/contact.html",
                controller: 'contactCtrl'
            }
        }
    })
})
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
angular.module("mobApp").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('gallery', {
        url: "/gallery",
        templateUrl: "gallery/gallery.html",
        controller: 'galleryCtrl'
    })
})
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
angular.module("mobApp").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            }
        }
    })
})
angular.module('mobApp').controller('locationCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', function ($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory) {
    window.
    location
    CtrlScope = $scope;
}])
angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('location', {
        url: "/location"
        , templateUrl: "location/location.html"
        , controller: 'locationCtrl'
    })
})
angular.module('mobApp').controller('messagesCtrl', ['$state', '$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$ionicHistory', function ($state, $scope, $stateParams, $ionicPopup, $ionicModal, $ionicHistory) {
    window.messagesCtrlScope = $scope;


}])
angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('messages', {
        url: "/messages"
        , templateUrl: "messages/messages.html"
        , controller: 'messagesCtrl'
    })
})
angular.module('mobApp').factory('DataSvc', ['$http', '$q', function($http, $q) {
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
        getClassInfo: function getClassInfo() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'api/getClassInfo',
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
angular.module('mobApp').controller('sidemenuCtrl', ["$state", "$scope", "$ionicModal", "$ionicPopup", function($state, $scope, $ionicModal, $ionicPopup) {

    // $scope.modals = {};
    // $scope.showPopup = function() {
    //     $scope.alertPopup = $ionicPopup.alert({
    //         title: 'Phone',
    //         template: '075 8741 2891',
    //         cssClass: 'contactPopup'
    //     })
    // }

    // $scope.showAbout = function() {
    //     $ionicModal.fromTemplateUrl('builder/about_modal.html', {
    //         scope: $scope,
    //         animation: 'slide-in-left'
    //     }).then(function(modal) {
    //         $scope.modals.aboutModal = modal;
    //         $scope.modals.aboutModal.show();
    //     });
    // }

    // $scope.showTerms = function() {
    //     $ionicModal.fromTemplateUrl('builder/terms_modal.html', {
    //         scope: $scope,
    //         animation: 'slide-in-left'
    //     }).then(function(modal) {
    //         $scope.modals.termModal = modal;
    //         $scope.modals.termModal.show();
    //     });
    // }

    // $scope.showContact = function() {
    //     $ionicModal.fromTemplateUrl('builder/contact_modal.html', {
    //         scope: $scope,
    //         animation: 'slide-in-left'
    //     }).then(function(modal) {
    //         $scope.modals.contactModal = modal;
    //         $scope.modals.contactModal.show();
    //     });
    // }

    // $scope.showKitchen = function() {
    //     $ionicModal.fromTemplateUrl('builder/kitchen_modal.html', {
    //         scope: $scope,
    //         animation: 'slide-in-left'
    //     }).then(function(modal) {
    //         $scope.modals.kitchenModal = modal;
    //         $scope.modals.kitchenModal.show();
    //     });
    // }
    
}])