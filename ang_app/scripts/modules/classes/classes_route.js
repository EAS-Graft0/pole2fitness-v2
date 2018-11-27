angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/classes", {
        title: "classes",
        templateUrl: "classes/classes.html",
        controller: "classesCtrl"
    })
}])