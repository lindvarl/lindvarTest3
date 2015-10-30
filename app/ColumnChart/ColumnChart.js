'use strict';

angular.module('myApp.columnChart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ColumnChart', {
    templateUrl: 'ColumnChart/ColumnChart.html',
    controller: 'ColumnChartCtrl'
  });
}])

.controller('ColumnChartCtrl', ['$scope', function($scope) {
	 $scope.chartObject = {};
	    
	    $scope.chartObject.type = "ColumnChart";
	    

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