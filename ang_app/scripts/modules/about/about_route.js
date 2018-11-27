angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/about", {
        title: "about",
        templateUrl: "about/about.html",
        controller: "aboutCtrl"
    })
}])