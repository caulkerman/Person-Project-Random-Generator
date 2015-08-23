var app = angular.module("randomApp", ['ui.router', /*'ngAnimate', 'ui.bootstrap'*/]);

app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  
  $stateProvider
    
    .state('home', {
      url: "/home",
      templateUrl: "htmlTemplates/homeTmpl.html" 
    })
    
    .state('subjectList', {
      url: "/subjectList",
      templateUrl: "htmlTemplates/subjectList.html"
	  })

    .state('itemListGo', {
      url: "/itemListGo",
      templateUrl: "htmlTemplates/itemListGo.html"
    })
    
    .state('help', {
      url: "/help",
      templateUrl: "htmlTemplates/help.html"
    })

    


    .state('setItUp', {
    	url: "/setItUp",
      views: {
    	"": {templateUrl: "htmlTemplates/setItUp.html"},

    		"setItUpSubjectList@setItUp": {
    			templateUrl: "htmlTemplates/setItUpSubjectList.html",
    			// controller: "setItUpCtrl"
    		},
    		
    		"setItUpItemList@setItUp": {
    			templateUrl: "htmlTemplates/setItUpItemList.html",
    			// controller: "setItUpCtrl"
    		}
    	}
    })

    });

   