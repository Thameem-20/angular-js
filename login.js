var app = angular.module('myApp',[]);
app.controller('LoginController', function($scope){
    $scope.user = {username:"username"};
    $scope.isLoggedIn = false;
    $scope.login = function(){
        $scope.isLoggedIn = true; 
};
});