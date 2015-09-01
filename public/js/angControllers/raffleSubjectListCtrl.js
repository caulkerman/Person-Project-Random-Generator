app.controller("raffleSubjectListCtrl", function($scope, $state, $stateParams, setItUpService, raffleService) {



//////RAFFLE SETUP FUNCTIONS///////////////// 
$scope.getDb1SubjectLists = function() {
	raffleService.getSubjectListsDb1().then(function(response) {
		$scope.dataBase1Lists = response.data;
	});
}

$scope.saveDataBase1ToDataBase2 = function(dataBase1List) {
	raffleService.saveDataBase1ToDataBase2(dataBase1List).then(function(respo) {
	})
	$scope.getListFromDb2();
}



////////PLAY THE RAFFLE FUNCTIONS////////////////
$scope.getListFromDb2 = function() {
	raffleService.getSubjectListsDb2().then(function(response) {
		$scope.db2ItemLists = response.data;
		console.log(response.data);
		if (response.data === "") {
			alert("You need to set up your Randomizer Lists")
		}
		// console.log("coming from db2 assigned to $scope.db2ItemLists", $scope.db2ItemLists);
	});
}

$scope.getSubjectItemsList = function(index) {
	// console.log(index);
	$scope.db2Items = $scope.db2ItemLists[index].item;
	$scope.db2Id =    $scope.db2ItemLists[index]._id;
	console.log("what it $scope.db2Id?", $scope.db2Id);
	$state.go("raffleSubjectList.raffleItemListGo",
	 	{item: $scope.db2ItemLists[index].name})

}


$scope.deleteDb2Obj = function(index) {
	var id = $scope.db2ItemLists[index]._id;
	raffleService.deleteDb2SubjectList(id).then(function(response) {
	})
	$scope.getListFromDb2();
}



});