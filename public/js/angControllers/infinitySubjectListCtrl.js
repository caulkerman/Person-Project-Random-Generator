app.controller("infinitySubjectListCtrl", function($scope, $state, $stateParams, setItUpService) {

$scope.getSubjectList = function() { //need a function that returns all requests
		setItUpService.getSubjectLists().then(function(response) {
			$scope.subjects = response.data;
		});
	};

$scope.getSubjectItemsList = function(index) {
	// console.log($scope.subjects[index])
	$scope.items = $scope.subjects[index].item;
	$state.go('infinitySubjectList.infinityItemListGo', {item: $scope.subjects[index].name})
}











});