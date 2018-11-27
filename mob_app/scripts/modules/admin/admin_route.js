angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('admin', {
        url: "/admin"
        , templateUrl: "admin/admin.html"
        , controller: 'adminCtrl'
    })
})