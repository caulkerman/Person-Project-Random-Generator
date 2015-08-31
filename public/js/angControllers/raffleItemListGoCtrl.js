app.controller("raffleItemListGoCtrl", function($scope, raffleService) {
	"use strict";
	

	
	$scope.randomize = function() {
        console.log("randomizing");
        console.log("the info going into the randomizer", $scope.db2Items);
        var num = Math.floor(Math.random() * $scope.db2Items.length);
        for (var i = 0; i < $scope.db2Items.length; i++) {
  			if (i === num) {
  				$scope.finalRandomItems = $scope.db2Items[i];
  			}
  			
			if (i === num) {
  				$scope.db2Items.splice(i, 1)
  				var itemNames = $scope.db2Items;
  				raffleService.updateRaffleItemLists(itemNames, $scope.db2Id).then(function(response) {
  					if (response.status === 200) {
  						console.log("the item has been deleted");
  					}
  				})
  			}
		}
	};








}); 