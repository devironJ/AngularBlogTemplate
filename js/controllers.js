/**
 * Created by Devon on 2/11/2015.
 */

var blogAppControllers = angular.module("blogAppControllers",["firebase", "ngAnimate"]);

blogAppControllers.controller("EditorController",["$scope","$firebase", function($scope, $firebase){
    $scope.ordering = "date";
    var ref = new Firebase("https://sodpictureblog.firebaseio.com/");
    //object that gets information from a database
    var sync = $firebase(ref);

    //use $scope to check for 2-way binding
    $scope.myPosts= sync.$asArray();

    $scope.hide=function(post){
        post.hide = true;
    };

    var getCurrentDate = function(){
        var today = new Date();
        var day = today.getDate(); //dd
        var monthNum = today.getMonth();
        var year = today.getFullYear(); //yyyy
        var monthArray = ["January" , "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var stringDate = monthArray[monthNum] + " " + day + ", " + year;
        console.log(stringDate);
        return stringDate
    };
    $scope.addPost=function(){
        $scope.post.date = getCurrentDate();
        $scope.myPosts.$add($scope.post);
        $scope.post = {};
    }
}]);

