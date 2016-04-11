app.controller("infinitySubjectListCtrl", function($scope, $state, $stateParams, setItUpService) {

/*  subject object
{
	name: subject names,
	item: [array of items]
}
*/

var getSubjectList = function() { 
	setItUpService.getSubjectLists().then(function(response) {
		console.log(response);
			$scope.subjects = response.data; // This is the array that contains all the subject objects.

	});
};

getSubjectList();


$scope.getSubjectItemsList = function(index) {
	$scope.items = $scope.subjects[index].item; // this is the item property, it is an array of
	$state.go('infinitySubjectList.infinityItemListGo')
}



});