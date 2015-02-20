/**
 * Created by Devon on 2/11/2015.
 */

var blogAppControllers = angular.module("blogAppControllers",["firebase", "ngAnimate","blogAppServices"]);

blogAppControllers.controller("EditorController",["$scope","$firebase","FirebaseGet", function($scope, $firebase, FirebaseGet){
    $scope.editOn = true;
    $scope.myPosts = FirebaseGet.pullFireBase();

    $scope.hide=function(post){
        post.hide = true;
    };

    //this function updates the firebase with edits upon click
    $scope.saveEdits = function(post){

        //reference to the exact post being edited
        var ref = new Firebase("https://sodpictureblog.firebaseio.com/" + post.$id);
        var sync = $firebase(ref);
        $scope.edit = post;

        //angularfire update code
        sync.$update({title: $scope.edit.title, subtitle: $scope.edit.subtitle, body: $scope.edit.body}).then(function(ref) {
            console.log("SUCCESS: "+ ref.key());    // bar
        }, function(error) {
            console.log("Error: "+ error);
        });

    };

    var getCurrentDate = function(){
        var today = new Date();
        var day = today.getDate(); //dd
        var monthNum = today.getMonth();
        var year = today.getFullYear(); //yyyy
        var monthArray = ["January" , "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var stringDate = monthArray[monthNum] + " " + day + ", " + year;
        return stringDate
    };
    $scope.addPost=function(){
        $scope.post.date = getCurrentDate();
        $scope.myPosts.$add($scope.post);
        $scope.post = {};
    }


}]);


blogAppControllers.controller("GridController",["$scope", "$firebase", "FirebaseGet", function($scope, $firebase, FirebaseGet){
    $scope.myPosts = FirebaseGet.pullFireBase();
}]);

blogAppControllers.controller("ListController",["$scope", "$firebase", "FirebaseGet", function($scope, $firebase, FirebaseGet){
    $scope.myPosts = FirebaseGet.pullFireBase();
}]);
//$scope.ordering = 'date';
//
//$scope.sortClicked = function(sort){
//    $scope.ordering = sort;
//};
//$scope.$watch($scope.ordering, function(){
//    sortFactory.setSorter($scope.ordering);
//    console.log($scope.ordering);
//});

//sortFactory.setSorter($scope.ordering);