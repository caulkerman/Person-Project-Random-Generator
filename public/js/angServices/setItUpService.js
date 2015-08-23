app.service("setItUpService", function($http, $q) {

this.getSubjectLists = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/subject-items-Lists'
	}).then(function(response) {
		console.log("coming from server ", response.data);
		deferred.resolve(response.data);
	})
	return deferred.promise;
};
//****************************************************************	
//*******This code below just to show me the shortcut way*********

// $http.get('/someUrl').
//   then(function(response) {
//     // this callback will be called asynchronously
//     // when the response is available
//   }, function(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//   });
///**************************************************************
//***************************************************************

this.postSubjectList = function(subjectName) {
	var deferred = $q.defer();
	$http({
		method: "POST",
		url: '/api/subject-items-Lists',
		data: subjectName
	}).then(function(response) {
		console.log("dataService: response from server", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};


this.deleteSubjectList = function() {
	var deferred = $q.defer();
	$http({
		method: "DELETE",
		url: '/api/subject-items-Lists' + id,
	}).then(function(response) {
		console.log("deleted", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};




//Might not do PUT. Not sure how to do the PUT and and change name of subjectList and leave the array alone, if it will over-write the object like it did in mongo terminal.


});

