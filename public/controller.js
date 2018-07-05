var app = angular.module('myApp',[]);

function myController($scope, $http) {
    console.log("Inside myController...");
    $scope.userinfo = [];
    $scope.user = {};

    // Used to getAll user details
    $scope.getAllUserInfo = function () {
        $http.get('/userinfo').then(function (res) {
            $scope.userinfo = res.data;
        }, function (err) {
            console.log(err);
        });
    }
}

app.controller('myController',myController);