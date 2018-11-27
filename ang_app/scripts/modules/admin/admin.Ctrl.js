angular.module('ang-app').controller('adminCtrl', ['$scope', '$http', 'DataSvc', '$timeout', function($scope, $http, DataSvc, $timeout) {
    window.adminCtrlScope = $scope;


    $scope.newPost = (post) => {
        DataSvc.addNewPost(post).then((res) => {
            $scope.messageResponse = res;
            $timeout(() => {
                location.reload();
            }, 1000)
        });
    };


    $scope.startNewBlock = (date) => {

        date.setHours(18, 00, 00);
        var classes = {}

        /* Class 1 */
        classes.class1 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        };

        classes.class1.date2.setDate(classes.class1.date1.getDate(classes.class1.date1) + 7);
        classes.class1.date3.setDate(classes.class1.date1.getDate(classes.class1.date1) + 14);
        classes.class1.date4.setDate(classes.class1.date1.getDate(classes.class1.date1) + 21);
        classes.class1.date5.setDate(classes.class1.date1.getDate(classes.class1.date1) + 28);
        // dates[0].push(classes.class1);
        /* Class 1 */

        /* Class 2 */
        date.setHours(19, 05, 00);

        classes.class2 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        };

        classes.class2.date2.setDate(classes.class2.date1.getDate(classes.class2.date1) + 7);
        classes.class2.date3.setDate(classes.class2.date1.getDate(classes.class2.date1) + 14);
        classes.class2.date4.setDate(classes.class2.date1.getDate(classes.class2.date1) + 21);
        classes.class2.date5.setDate(classes.class2.date1.getDate(classes.class2.date1) + 28);
        // dates[0].push(class2);
        /* Class 2 */

        /* Class 3 */
        date.setDate(date.getDate() + 1);
        date.setHours(19, 00, 00);

        classes.class3 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class3.date2.setDate(classes.class3.date1.getDate(classes.class3.date1) + 7);
        classes.class3.date3.setDate(classes.class3.date1.getDate(classes.class3.date1) + 14);
        classes.class3.date4.setDate(classes.class3.date1.getDate(classes.class3.date1) + 21);
        classes.class3.date5.setDate(classes.class3.date1.getDate(classes.class3.date1) + 28);

        /* Class 3 */

        /* Class 4 */

        date.setDate(date.getDate() + 1);
        date.setHours(18, 30, 00);

        classes.class4 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class4.date2.setDate(classes.class4.date1.getDate(classes.class4.date1) + 7);
        classes.class4.date3.setDate(classes.class4.date1.getDate(classes.class4.date1) + 14);
        classes.class4.date4.setDate(classes.class4.date1.getDate(classes.class4.date1) + 21);
        classes.class4.date5.setDate(classes.class4.date1.getDate(classes.class4.date1) + 28);

        /* Class 4 */

        /* Class 5 */

        date.setHours(19, 30, 00);

        classes.class5 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class5.date2.setDate(classes.class5.date1.getDate(classes.class5.date1) + 7);
        classes.class5.date3.setDate(classes.class5.date1.getDate(classes.class5.date1) + 14);
        classes.class5.date4.setDate(classes.class5.date1.getDate(classes.class5.date1) + 21);
        classes.class5.date5.setDate(classes.class5.date1.getDate(classes.class5.date1) + 28);

        /* Class 5 */

        /* Class 6 */

        date.setDate(date.getDate() + 1);
        date.setHours(19, 00, 00);

        classes.class6 = {
            date1: new Date(date),
            date2: new Date(date),
            date3: new Date(date),
            date4: new Date(date),
            date5: new Date(date)
        }

        classes.class6.date2.setDate(classes.class6.date1.getDate(classes.class6.date1) + 7);
        classes.class6.date3.setDate(classes.class6.date1.getDate(classes.class6.date1) + 14);
        classes.class6.date4.setDate(classes.class6.date1.getDate(classes.class6.date1) + 21);
        classes.class6.date5.setDate(classes.class6.date1.getDate(classes.class6.date1) + 28);

        /* Class 6 */

        date = date.toISOString().substring(0, 19)
        DataSvc.startNewBlock(classes).then((res) => {
            console.log(res);
            $scope.messageResponse = "New block started!";
            $timeout(() => {
                location.reload();
            }, 1500);
        });
    };


}]);