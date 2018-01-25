"use strict";

angular.module("funWithStuff").controller("TodoCtrl", function($scope){

  let name = "Fred";

  $scope.message = "Whatup this in todo";

  $scope.printValue = function() {
    console.log($scope.message);
  };

  $scope.todos = [
        {name: "Mow the lawn", completed: true},
        {name: "Feed the Dog", completed: false},
        {name: "Water the Plants", completed: true},
        {name: "Eat some Pizza", completed: false}
      ];


  
});