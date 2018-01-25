"use strict";

const myApp = angular.module("funWithStuff", ["ngRoute"]);

myApp.config( ($routeProvider)=>{
  $routeProvider
  .when("/", {
    templateUrl: "../partials/greeting.html",
    controller: "MessageCtrl"
  })
  .when("/todo", {
    templateUrl: "partials/todos.html",
    controller: "TodoCtrl"
  })
  .when("/songs", {
    templateUrl: "partials/songs.html",
    controller: "SongCtrl"
  });
}); 


myApp.controller("MessageCtrl", function($scope){
  $scope.message = "Welcome to Angular! Ya Jabroni!";


});

myApp.controller("MessageCtrl2", function($scope) {
  $scope.message = "Yo this is message 2, as hell.";
});

