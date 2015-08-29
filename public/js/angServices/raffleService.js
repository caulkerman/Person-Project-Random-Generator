app.service("raffleService", function($q, $http) {


this.getSubjectLists = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/subject-items-Lists'
	}).then(function(response) {
		console.log("response from the official server", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};

this.saveRefreshedLists = function(refreshed) {
	console.log("raffle service before it goes to server", refreshed);
	var deferred = $q.defer();
	$http({
		method: "POST",
		url: '/api/raffle-subject-Lists',
		data: refreshed
	}).then(function(response) {
		console.log("POST response from new server", response);
		deferred.resolve(response);
	})
	return deferred.promise;
}


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
