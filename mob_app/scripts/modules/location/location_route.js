angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('location', {
        url: "/location"
        , templateUrl: "location/location.html"
        , controller: 'locationCtrl'
    })
})