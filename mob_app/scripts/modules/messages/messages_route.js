angular.module("mobApp").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('messages', {
        url: "/messages"
        , templateUrl: "messages/messages.html"
        , controller: 'messagesCtrl'
    })
})