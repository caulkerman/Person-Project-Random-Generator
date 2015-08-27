app.service("setItUpService", function($http, $q) {

this.getSubjectLists = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/subject-items-Lists'
	}).then(function(response) {
		deferred.resolve(response);
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

this.postSubjectList = function(subject) {
	var deferred = $q.defer();
	$http({
		method: "POST",
		url: '/api/subject-items-Lists',
		data: subject
	}).then(function(response) {
		console.log("dataService: response from server", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};


this.deleteSubjectList = function(id) {
	var deferred = $q.defer();
	$http({
		method: "DELETE",
		url: '/api/subject-items-Lists/' + id,
	}).then(function(response) {
		console.log("deleted", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};


this.saveItemNames = function(itemNames, id) {
	console.log("services put method before it goes to server", itemNames)
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/subject-items-Lists/' + id,
		data: itemNames
	}).then(function(response) {
		console.log("put method response", response)
		deferred.resolve(response);
	})
	return deferred.promise;
};





});

