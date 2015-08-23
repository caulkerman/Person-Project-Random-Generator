app.controller("setItUpSubjectListCtrl", function($scope, setItUpService) {

	$scope.subjectList = {  //This is the subject list that will be ng-repeated for both subjects and items
		subjects: []    //it will look like: {}
	}

	$scope.getSubjectLists = function() { //need a function that returns all requests
		setItUpService.getSubjectLists().then(function(response) {
			$scope.subjectLists = response.data;
		});
	};

	
	$scope.postSubjectList = function(subjectName) {   //function caller on setItUpSubjectList.html page
		var subject = {
			name: subjectName,
			item: [] };
		
		setItUpService.postSubjectList(subject).then(function(response) { //this will return only the one posted request.
			if (response.status === 200) {
            console.log("YIPPIE, IT WORKS. I AM AWESOME!!!!!!!!!")
			$scope.subjectList.subjects.push(response.data);
			} else {
				console.log("error. Server failed to store data");
			}
		});
		getSubjectLists();
	};

	$scope.addItem = function(itemName) {  //function caller on setItUpItemList.html page
		newItemObj.push(itemName)

	};

	$scope.deleteSubjectList = function(index) {  //function caller on setItUpSubjectList.html page
		var id = $scope.subjectLists[index]._id;
		setItUpService.deleteSubjectList(id).then(function(response) {
			console.log(response);
			$scope.getSubjectLists();
		});
	}

	
    });