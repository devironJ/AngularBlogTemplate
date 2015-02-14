/**
 * Created by Devon on 2/13/2015.
 */
var blogAppFactories = angular.module("blogAppFactories",[]);

blogAppFactories.factory("sortFactory", function(){
    var sortSelection = "";
    return{
        setSorter: function(sort){
            sortSelection = sort;
        },
        getSorter: function(){
            return sortSelection
        }
    }
});