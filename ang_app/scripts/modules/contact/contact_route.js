angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/contact", {
        title: "contact",
        templateUrl: "contact/contact.html",
        controller: "contactCtrl"
    })
}])