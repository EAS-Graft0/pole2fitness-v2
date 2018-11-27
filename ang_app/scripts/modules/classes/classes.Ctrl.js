angular.module('ang-app').controller('classesCtrl', ['$scope', '$http', 'DataSvc', '$timeout', function($scope, $http, DataSvc, $timeout) {
    window.classesCtrlScope = $scope

    DataSvc.getClasses().then((classes) => {
        $scope.classes = classes;
    });

    $scope.getNumber = (number) => {
        return new Array(number);
    };


    $scope.selectClass = (lesson) => {
        $scope.selectedClass = lesson;
        DataSvc.getClassSchedule(lesson.id).then((schedule) => {
            $scope.schedule = schedule;
            DataSvc.getClassInfo(lesson.id).then((attendees) => {
                $scope.attendees = attendees;
            });
        });
    };

    $scope.book = (booking) => {
        booking.class_id = $scope.selectedClass.id;
        DataSvc.book(booking).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1500);
        });
    };

}])