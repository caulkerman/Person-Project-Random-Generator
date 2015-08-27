app.controller("setItUpCtrl", function($scope, setItUpService) {

	 
///////////////GET OR READ FUNCTIONS IN CRUD//////////////////
	$scope.getSubjectLists = function() { 
		setItUpService.getSubjectLists().then(function(response) {
			$scope.subjectLists = response.data;
		});
	};

	
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
		
		setItUpService.postSubjectList(subject).then(function(response) { //this will return only the one posted request.
			if (response.status === 200) {
            $scope.subjectName = "";
         
			} else {
				console.log("error. Server failed to store data");
			}
		});
		$scope.getSubjectLists();
	};


///////////////////PUT OR UPDATE FUNCTIONS IN CRUD///////////////
	$scope.saveItemNames = function(itemName) {
		$scope.currentItems.push(itemName);
		var itemNames = $scope.currentItems;
		setItUpService.saveItemNames(itemNames, $scope._id).then(function(response) {
			if (response.status === 200) {
				$scope.itemName = "";
				console.log("subject has been updated")
			}
		})
	}


///////////////////DELETE FUNCTIONS IN CRUD//////////////////////
	$scope.deleteSubjectList = function(index) {  //function caller on setItUpSubjectList.html page
		var id = $scope.subjectLists[index]._id;
		setItUpService.deleteSubjectList(id).then(function(response) {
			$scope.getSubjectLists();
		});
	}

	$scope.deleteItemList = function(index) {  //function caller on setItUpSubjectList.html page
		$scope.currentItems.splice(index, 1);
		var itemNames = $scope.currentItems;
		setItUpService.saveItemNames(itemNames, $scope._id).then(function(response) {
			if (response.status === 200) {
				console.log("item has been deleted")
			}
		})
	}
		

/////////////OTHER FUNCTIONS TO MAKE IT WORK/////////////////////

	$scope.showItemList = function(items, _id, name) {
		$scope.currentItems = items;
		$scope._id = _id;
		$scope.itemParentName = name;
	}

	


  




    

	
    });