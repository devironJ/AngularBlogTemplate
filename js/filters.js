/**
 * Created by Devon on 2/16/2015.
 */
var blogAppFilters = angular.module("blogAppFilters", []);

blogAppFilters.filter("DateFilter", function(){
    return function(date){
        var monthArray = ["January" , "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log("Substring: " + date.substring(0,2));
        console.log("month: " + parseInt(date.substring(0,2)) - 1);
        var newDateString = monthArray[parseInt(date.substring(0,2) - 1)];
        newDateString += " " + date.substring(3,5) + ",";
        newDateString += " 20" + date.substring(6,8);
        return newDateString
    }
});