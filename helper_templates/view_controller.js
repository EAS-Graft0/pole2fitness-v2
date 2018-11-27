angular.module('ang-app').controller('<%= name %>Ctrl', ['$scope', '$http', function ($scope, $http) {
    window.<%= name %>CtrlScope = $scope
}])