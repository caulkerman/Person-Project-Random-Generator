app.controller("subjectListCtrl", function($scope, setItUpService) {

$scope.getSubjectLists = function() { //need a function that returns all requests
		setItUpService.getSubjectLists().then(function(response) {
			$scope.subjects = response.data;
		});
	};

$scope.getSubjectItemsList = function(index) {
	
}




});