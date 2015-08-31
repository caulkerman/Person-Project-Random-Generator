app.controller("raffleSubjectListCtrl", function($scope, $state, $stateParams, setItUpService, raffleService) {



//////RAFFLE SETUP FUNCTIONS///////////////// 
$scope.getviewAllLists = function() {
	raffleService.getSubjectListsDb1().then(function(response) {
		$scope.dataBase1Lists = response.data;
	});
}

$scope.saveDataBase1ToDataBase2 = function(listOfStuff) {
	raffleService.saveDataBase1ToDataBase2(listOfStuff).then(function(respo) {

	})
}



////////PLAY THE RAFFLE FUNCTIONS////////////////
$scope.getListFromDb2 = function() {
	raffleService.getSubjectListsDb2().then(function(response) {
		$scope.db2ItemLists = response.data;
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
// $scope.goober = function


// $scope.saveToRaffleServer = function() {
// 	var butter = $scope.dataBase1Lists;
// 	for (var i = 0; i < butter.length; i++) {
// 		if (butter) {
	
// 		raffleService.saveRefreshedLists(butter).then(function(res) {
// 	 		console.log("response from new collection", res)
// 	 			if (res.status === 200) {
// 	 				$scope.refreshedLists = res;
// 	 			} else {
// 	 				return "You stupid, it didn't work. Moron!! YOU SUCK";
//  				}
//  			})
//  		}
//  	}
// };







});