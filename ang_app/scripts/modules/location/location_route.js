angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/location", {
        title: "location",
        templateUrl: "location/location.html",
        controller: "locationCtrl"
    })
}])