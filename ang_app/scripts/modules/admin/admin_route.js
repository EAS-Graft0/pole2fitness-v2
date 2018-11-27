angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/admin", {
        title: "admin",
        templateUrl: "admin/admin.html",
        controller: "adminCtrl"
    })
}])