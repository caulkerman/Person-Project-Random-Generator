app.controller("raffleSubjectListCtrl", function($scope, $state, $stateParams, setItUpService, raffleService) {



//the refreshAllLists function gets the offical list 
$scope.refreshAllLists = function() {
	raffleService.getSubjectLists().then(function(response) {
		$scope.oldResponses = response.data;
		console.log("Contoller ln 9 console.log", $scope.oldResponses);
	});
};


$scope.saveToRaffleServer = function(butter) {
	raffleService.saveRefreshedLists(butter).then(function(res) {
 		console.log("response from new collection", res)
 			if (res.status === 200) {
 				$scope.refreshedLists = res;
 			};
 	});
};







});