app.controller("setItUpCtrl", function($scope, setItUpService) {

	
var someVar = 

	$scope.getSubjectLists = function() { //need a function that returns all requests
		setItUpService.getSubjectLists().then(function(response) {
			$scope.subjectLists = response.data;
		});
	};

	$scope.getItemLists = function() { //need a function that returns all requests
		setItUpService.getSubjectLists().then(function(response) {
			$scope.itemLists = response.data;
			console.log($scope.itemLists);
			
		});
	};


	$scope.stuff = $scope.subjectLists;	
	console.log("scope.stuff", $scope.stuff);
	
	$scope.postSubjectList = function(subjectName) {   //function caller on setItUpSubjectList.html page
		var subject = {
			name: subjectName,
			item: ["bananas", "peaches", "ice cream"] };
		
		setItUpService.postSubjectList(subject).then(function(response) { //this will return only the one posted request.
			if (response.status === 200) {
            $scope.subjectName = "";
            //may have some extra functionality here
			} else {
				console.log("error. Server failed to store data");
			}
		});
		$scope.getSubjectLists();
	};

	


	$scope.deleteSubjectList = function(index) {  //function caller on setItUpSubjectList.html page
		var id = $scope.subjectLists[index]._id;
		setItUpService.deleteSubjectList(id).then(function(response) {
			$scope.getSubjectLists();
		});
	}

	$scope.makeItemList = function(items) {
		console.log("from line 50", items)
		$scope.currentItems = items;
	}


  




    

	
    });