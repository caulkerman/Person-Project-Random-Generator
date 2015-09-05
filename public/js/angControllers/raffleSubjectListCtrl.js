app.controller("raffleSubjectListCtrl", function($scope, $state, $stateParams, setItUpService, raffleService) {


//////RAFFLE SETUP FUNCTIONS///////////////// 
var getDb1SubjectLists = function() {
	raffleService.getSubjectListsDb1().then(function(response) {
		// if (response.data === 200) {//this line is new
			$scope.dataBase1Lists = response.data;////this line is old
			// raffleService.saveDataBase1ToDataBase2($scope.dataBase1Lists).then(function(respo) {
			// })
		
	});
}
getDb1SubjectLists();

$scope.saveDataBase1ToDataBase2 = function(dataBase1List) {
	raffleService.saveDataBase1ToDataBase2(dataBase1List).then(function(respo) {
	})
	getListFromDb2();
}


////////PLAY THE RAFFLE FUNCTIONS////////////////
var getListFromDb2 = function() {
	raffleService.getSubjectListsDb2().then(function(response) {
		$scope.db2ItemLists = response.data;
		if (!response.data) {
			$window.alert("You need to set up your Raffle Lists");
		}
		console.log("lists available from db2", $scope.db2ItemLists);
	});
}
getListFromDb2();

$scope.getSubjectItemsList = function(index) {
	$scope.db2Names = $scope.db2ItemLists[index].name;
	$scope.db2Items = $scope.db2ItemLists[index].item;
	$scope.db2Id =    $scope.db2ItemLists[index]._id;
	console.log("says it's not defined", $scope.db2Items);
	$state.go("raffleSubjectList.raffleItemListGo", {item: $scope.db2ItemLists[index].name})
}


$scope.deleteDb2Obj = function(index) {
	var id = $scope.db2ItemLists[index]._id;
	raffleService.deleteDb2SubjectList(id).then(function(response) {
	})
	getListFromDb2();
}



});