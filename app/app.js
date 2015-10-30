'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.barChart',
  'myApp.columnChart',
  'myApp.annotationChart',
  'myApp.version',
  'googlechart'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/BarChart'});
}]);
