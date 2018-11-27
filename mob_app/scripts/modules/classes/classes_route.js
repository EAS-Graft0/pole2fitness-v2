angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('classes', {
        url: "/classes"
        , templateUrl: "classes/classes.html"
        , controller: 'classesCtrl'
    })
})