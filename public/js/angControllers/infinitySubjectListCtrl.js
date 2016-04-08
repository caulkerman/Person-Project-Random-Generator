app.controller("infinitySubjectListCtrl", function($scope, $state, $stateParams, setItUpService) {

var getSubjectList = function() { 
	setItUpService.getSubjectLists().then(function(response) {
		console.log(response);
			$scope.subjects = response.data;

	});
};

getSubjectList();


$scope.getSubjectItemsList = function(index) {
	$scope.items = $scope.subjects[index].item;
	$state.go('infinitySubjectList.infinityItemListGo', {item: $scope.subjects[index].name})
}



});