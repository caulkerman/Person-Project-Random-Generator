app.controller("infinityItemListGoCtrl", function($scope) {

var randomList = $scope.items;
console.log("random somethingsjdflsjdl", randomList);


 
$scope.randomize = function() {
  console.log("randomizing")
  var num = Math.floor(Math.random() * $scope.items.length);
  for (var i = 0; i < $scope.items.length; i++) {
  	if (i === num) {
  	$scope.finalRandomItem = $scope.items[i];
  	}
  }
}
// debugger
// var randomItem = $scope.randomize(randomList);
// $scope.finalRandomItem = randomItem;



});