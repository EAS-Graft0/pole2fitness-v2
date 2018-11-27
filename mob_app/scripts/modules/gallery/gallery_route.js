angular.module("mobApp").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('gallery', {
        url: "/gallery",
        templateUrl: "gallery/gallery.html",
        controller: 'galleryCtrl'
    })
})