app.service("raffleService", function($q, $http) {


this.getSubjectListsDb1 = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/subject-items-Lists'
	}).then(function(response) {
		console.log("response from Database #1", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};

this.getSubjectListsDb2 = function() {
	var deferred = $q.defer();
	$http({
		method: "GET",
		url: '/api/raffle-subject-Lists'
	}).then(function(response) {
		// console.log("response from Database #2", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};

this.saveDataBase1ToDataBase2 = function(refreshed) {
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


this.updateRaffleItemLists = function(itemNames, id) {
	console.log("services put method before it goes to server", itemNames)
	var deferred = $q.defer();
	$http({
		method: "PUT",
		url: '/api/raffle-subject-Lists/' + id,
		data: itemNames
	}).then(function(response) {
		console.log("put method response", response)
		deferred.resolve(response);
	})
	return deferred.promise;
};

this.deleteDb2SubjectList = function(id) {
	var deferred = $q.defer();
	$http({
		method: "DELETE",
		url: '/api/raffle-subject-Lists/' + id,
	}).then(function(response) {
		console.log("deleted", response);
		deferred.resolve(response);
	})
	return deferred.promise;
};



});
