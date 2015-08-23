// Step 1, Allow user to create a new catergory

// Step 2, User wants to select a category
// create a dropdown or list with user.categories
// When user selects a category, store selectedCategory
/*
	<select>
      <option ng-repeat="category in user.categories" ng-click="selectCategory(category)">{{category.name}}</option>
    </select>
*/

// Step 3, allow user to add options to the category.
// Step 4, allow user to randomly choose a option. (Math.random by _id)

$scope.addCategory = addCategory;
$scope.selectCategory = selectCategory;
// $scope.selectedCategory = selectedCategory; //This function activated by clicking on one of the category subjects on the add subject page.
$scope.randomOption = randomOption;

$scope.user = {
	categories: []	
};

/*
 * Function to add category
 * params string, pass name of category
 */
function addCategory(categoryName) {
	var category = {
		name: categoryName
		options: []
	};
	// Post to database, if successful add to array
	DataService.addCategory(category).then(function(response) {
		if(response.data.message === 'success') {
			$scope.user.categories.push(category);
		} else {
			console.log('There was an error adding the category');
		}
	});
}

/*
 * Function to add option
 * params string, pass name of option
 */
function addOption(optionName) {
	// Add new option to the selectedCategory.
	// Create a clean copy of the selectedCategory
	// var category = $.extend({}, $scope.selectedCategory);  //I think she has just renamed our previous category.
	// Add option to the category copy.
	category.options.push(optionName); ///watch this one if it is throwing errors. not sure yet about scope and which category.options it is using
										//it might
	// Post to database, if successful add to array
	DataService.addCategory(category).then(function(response) {
		if(response.data.message === 'success') {
			// It was successfully, so really add it to the selectedCategory
			$scope.selectedCategory.options.push(optionName);
		} else {
			console.log('There was an error adding the option');
		}
	});
}

function selectCategory(category) {
	$scope.selectedCategory = category;
}

function randomOption() {
	// Random Option
	$scope.selectedCategory
}


