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
      templateUrl: "htmlTemplates/subjectList.html",
      controller: "subjectListCtrl"
	  })

    .state('subjectList.itemListGo', {
      url: "/itemListGo",
      templateUrl: "htmlTemplates/itemListGo.html",

    })

    .state('itemListGo', {
      url: "/itemListGo",
      templateUrl: "htmlTemplates/itemListGo.html",
      controller: "itemListGoCtrl"
    })
    
    .state('help', {
      url: "/help",
      templateUrl: "htmlTemplates/help.html"
    })

    .state('setItUp', {
    	url: "/setItUp",
      templateUrl: "htmlTemplates/setItUp.html",
      controller: "setItUpCtrl"
    })

    





    });

   