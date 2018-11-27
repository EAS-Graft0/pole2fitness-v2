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