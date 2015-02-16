/**
 * Created by Devon on 2/16/2015.
 */

var blogAppServices = angular.module("blogAppServices", ["firebase"]);

blogAppServices.factory("FirebaseGet",["$firebase",function($firebase){
    return{
        pullFireBase: function(){
            var ref = new Firebase("https://sodpictureblog.firebaseio.com/");
            var sync = $firebase(ref);
            var Posts = sync.$asArray();
            return Posts;
        }
    };
}]);
