angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/gallery", {
        title: "gallery",
        templateUrl: "gallery/gallery.html",
        controller: "galleryCtrl"
    })
}])