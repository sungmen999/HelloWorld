angular.module('todo', []);

	var Todo = angular.module('todo');
	Todo.controller('TodoCtrl', ['$scope', function($scope) {
		console.log('Pass')

		$scope.allTasks = [];

		$scope.check = false;

		$scope.testSort = '';

		$scope.priorities = [
			{number: 1, text: 'Heigh'}, 
			{number: 2, text: 'Medium'}, 
			{number: 3, text: 'Low'}
		];

		$scope.priority = $scope.priorities[0];

		$scope.item = {};

		$scope.add_item = function() {
			var check_item = angular.equals($scope.item , {});
			if(check_item){

			}else{
				$scope.allTasks.push($scope.item);
				$scope.item = {};
			}
		};

	}]);
