app.controller("raffleSubjectListCtrl", function($scope, $state, $stateParams, setItUpService, raffleService) {



//the refreshAllLists function gets the offical list 
$scope.viewAllLists = function() {
	raffleService.getSubjectLists().then(function(response) {
		$scope.dataBase1Lists = response.data;
		console.log("Contoller ln 9 console.log", $scope.dataBase1Lists);
	});
};


$scope.saveToRaffleServer = function() {
	var butter = $scope.dataBase1Lists;
	for (var i = 0; i < butter.length; i++) {
		if (butter) {
	
		raffleService.saveRefreshedLists(butter).then(function(res) {
	 		console.log("response from new collection", res)
	 			if (res.status === 200) {
	 				$scope.refreshedLists = res;
	 			} else {
	 				return "You stupid, it didn't work. Moron!! YOU SUCK";
 				}
 			})
 		}
 	}
};


$scope.bobber = function(listOfStuff) {
	raffleService.saveRefreshedLists(listOfStuff).then(function(respo) {

	})
}




});