'use strict';
/**
 * Created by Devon on 2/13/2015.
 */
var blogApp = angular.module("blogApp",['ngRoute','blogAppControllers']);

//***Routers can only be injected into config functions ***
//$routeprovider is the argument for angular route
blogApp.config(['$routeProvider',function($routeProvider){
    //first time page runs through, hits the otherwise and goes to '/phones'?
    $routeProvider.when("/editor", {
        templateUrl: 'view1/view1.html',
        controller: "EditorController"
    }).
        when('/gridview',{
            templateUrl: 'view2/view2.html',
            controller: 'GridController'
        }).
        otherwise({
            redirectTo: '/editor'
        });
}]);