/**
 * Created by Devon on 2/11/2015.
 */

var blogAppControllers = angular.module("blogAppControllers",["firebase", "ngAnimate","blogAppFactories"]);

blogAppControllers.controller("EditorController",["$scope","$firebase", "sortFactory", function($scope, $firebase, sortFactory){
    //$scope.ordering = "date";
    //sortFactory.setSorter($scope.ordering);
    //console.log("First Order: " + $scope.ordering);
    //$scope.$apply(
    //    function(){
    //        $scope.ordering= sortFactory.getSorter();
    //        console.log("Apply: " + $scope.ordering);
    //    }
    //);
    //console.log("Second Order: " + $scope.ordering);
    //$scope.ordering=sortFactory.getSorter();
    //console.log($scope.ordering);

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

blogAppControllers.controller("GridController",["$scope,","$firebase", function($scope,$firebase){
    var ref = new Firebase("https://sodpictureblog.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.myPosts= sync.$asArray();
    console.log($scope.myPosts);
}]);

//blogAppControllers.controller("SortController",["$scope", 'sortFactory', function($scope, sortFactory){
//    $scope.ordering = 'date';
//
//    $scope.sortClicked = function(sort){
//        $scope.ordering = sort;
//    };
//    $scope.$watch($scope.ordering, function(){
//        sortFactory.setSorter($scope.ordering);
//        console.log($scope.ordering);
//    });
//
//    //sortFactory.setSorter($scope.ordering);
//}]);