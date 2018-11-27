angular.module("ang-app").config(["$routeProvider", function(routeProv) {
    routeProv.when("/<%= name %>", {
        title: "<%= name %>",
        templateUrl: "<%= name %>/<%= name %>.html",
        controller: "<%= name %>Ctrl"
    })
}])