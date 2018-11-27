angular.module('ang-app', ['ngRoute']).factory('', ['$rootScope', '$window', function($rootScope, $window) {
    //
}]).config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.otherwise({
        redirectTo: '/main'
    });

}]).controller('headerCtrl', ['$scope', '$location', function($scope, $location) {

    $scope.isActive = (location) => {
        return location === $location.path();
    };

}]);