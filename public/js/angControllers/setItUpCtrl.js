app.controller("setItUpCtrl", function($scope, setItUpService, $log) {

	 
///////////////GET OR READ FUNCTIONS IN CRUD//////////////////

var getSubjectLists = function() { 
	setItUpService.getSubjectLists().then(function(response) {
		console.log("this is GET response from database in controller ", response);
		$scope.subjectLists = response.data;
	});
};
getSubjectLists();

	
$scope.getItemLists = function() { 
	setItUpService.getSubjectLists().then(function(response) {
		$scope.itemLists = response.data;
		console.log($scope.itemLists);
	});
};
	
	
////////////POST OR CREATE FUNCTIONS IN CRUD////////////////////////
$scope.postSubjectList = function(subjectName) { 
	var subject = {
		name: subjectName,
		item: [] };
		
		if (subjectName === "" || subjectName === undefined) {
			console.log("error, empty string");
			return;
		} else {
		
			setItUpService.postSubjectList(subject).then(function(response) { //this will return only the one posted request.
				$log.log("this is response in Controller ", response);
				if (response.status === 200) {
	            $scope.subjectName = "";
	         }
				console.log("error. Server failed to store data");
			});
			getSubjectLists();
		}
};


///////////////////PUT OR UPDATE FUNCTIONS IN CRUD///////////////


$scope.showItemList = function(items, _id, name) {
		$scope.currentItems = items;
		$scope._id = _id;
		$scope.itemParentName = name;
}

	
$scope.saveItemNames = function(newItem) {
	if (newItem === "" || newItem === undefined) {
		console.warn("error, empty string")
		return;
	} else {
		$scope.currentItems.unshift(newItem);
		var itemNames = $scope.currentItems;
		setItUpService.saveItemNames(itemNames, $scope._id).then(function(response) {
			if (response.status === 200) {
				$scope.newItem = "";
				console.log("subject has been updated")
			}
		});
	}
}


///////////////////DELETE FUNCTIONS IN CRUD//////////////////////
	
$scope.deleteSubjectList = function(index) { 
	var id = $scope.subjectLists[index]._id;
	setItUpService.deleteSubjectList(id).then(function(response) {
		getSubjectLists();
	});
	
}

	
$scope.updateItemList = function(index) {  //function caller on setItUpSubjectList.html page
	$scope.currentItems.splice(index, 1);
	var itemNames = $scope.currentItems;
	console.log("this is spliced array", itemNames);
	setItUpService.saveItemNames(itemNames, $scope._id).then(function(response) {
		if (response.status === 200) {
			console.log("item has been deleted")
		}
	})
}
		
	
});