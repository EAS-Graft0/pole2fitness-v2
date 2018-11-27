angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/main", {
        title: "main",
        templateUrl: "main/main.html",
        controller: "mainCtrl"
    })
}])