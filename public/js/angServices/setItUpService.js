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


this.postSubjectList = function(subject) {
	var deferred = $q.defer();
	$http({
		method: "POST",
		url: '/api/subject-items-Lists',
		data: subject
	}).then(function(response) {
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
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/subject-items-Lists/' + id,
		data: itemNames
	}).then(function(response) {
		console.log("items updated", response)
		deferred.resolve(response);
	})
	return deferred.promise;
};



});

