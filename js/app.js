'use strict';
/**
 * Created by Devon on 2/13/2015.
 */

var blogApp = angular.module("blogApp",['ngRoute','blogAppControllers', 'blogAppFilters']);

//***Routers can only be injected into config functions ***
//$routeprovider is the argument for angular route
blogApp.config(['$routeProvider',function($routeProvider){
    //first time page runs through, hits the otherwise and goes to '/phones'
    $routeProvider.when("/editor", {
        templateUrl: 'view1/view1.html',
        controller: "EditorController"
    }).
        when('/gridview',{
            templateUrl: 'view2/view2.html',
            controller: "GridController"
        }).
        when('/listview',{
            templateUrl: 'view3/view3.html',
            controller: "ListController"
        }).
        otherwise({
            redirectTo: '/editor'
        });
}]);

blogApp.directive('dropDownMenu', function(){
    return {
        restrict: "A",
        link: function(scope, element, attrs){
            $(element).blogApp(scope.$eval(attrs.dropDownMenu));
        }
    };
});
