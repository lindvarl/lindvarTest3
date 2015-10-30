'use strict';

angular.module('myApp.barChart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/BarChart', {
    templateUrl: 'BarChart/BarChart.html',
    controller: 'BarChartCtrl'
  });
}])

.controller('BarChartCtrl', ['$scope', function($scope) {
$scope.chartObject = {};
    
    $scope.chartObject.type = "BarChart";
        
    $scope.chartObject.data = {"cols": [
        {id: "t", label: "Topping", type: "string"},
        {id: "s", label: "Slices", type: "number"}
    ], "rows": [
        {c: [
            {v: "Mushrooms"},
            {v: 3},
        ]},
        {c: [
             {v: "Onions"},
             {v: 3},
        ]},
        {c: [
            {v: "Olives"},
            {v: 31}
        ]},
        {c: [
            {v: "Zucchini"},
            {v: 1},
        ]},
        {c: [
            {v: "Pepperoni"},
            {v: 2},
        ]}
    ]};

    $scope.chartObject.options = {
        'title': 'How Much Pizza I Ate Last Night'
    };
}]);