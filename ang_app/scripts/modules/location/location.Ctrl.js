angular.module('ang-app').controller('locationCtrl', ['$scope', '$http', function($scope, $http) {
    window.locationCtrlScope = $scope

    var map;

    var myLatlng = new google.maps.LatLng(51.683069, -3.216005);


    // $scope.initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.683069,
            lng: -3.216005
        },
        zoom: 14
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Pole2Fitness - Planet Fitness - Aberbargoed'
    });
    // }


    $scope.initMap();
    // 

}])