/**
 * Created by Devon on 2/11/2015.
 */
var app = angular.module("blogApp",["firebase"]);

app.controller("MainController",["$scope","$firebase", function($scope, $firebase){
    $scope.ordering = "date";
    var ref = new Firebase("https://sodpictureblog.firebaseio.com/");
    //object that gets information from a database
    var sync = $firebase(ref);

    //use $scope to check for 2-way binding
    $scope.myPosts= sync.$asArray();

    $scope.hide=function(post){
        post.hide = true;
    };

    $scope.addPost=function(){
        $scope.myPosts.$add($scope.post);
        $scope.post = {};
    }
}]);
