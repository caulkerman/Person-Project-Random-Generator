var app = angular.module("randomApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  
  $stateProvider
    
    .state('home', {
      url: "/home",
      templateUrl: "htmlTemplates/homeTmpl.html"
    })
    
    .state('infinitySubjectList', {
      url: "/infinitySubjectList",
      templateUrl: "htmlTemplates/infinitySubjectList.html",
      controller: "infinitySubjectListCtrl"
	  })

    .state('infinitySubjectList.infinityItemListGo', {
      url: "/:item",
      templateUrl: "htmlTemplates/infinityItemListGo.html",
      controller: "infinityItemListGoCtrl"
    })

    .state('raffleSubjectList', {
      url: "/raffleSubjectList",
      templateUrl: "htmlTemplates/raffleSubjectList.html",
      controller: "raffleSubjectListCtrl",
    })

    .state("raffleSubjectList.raffleItemListGo", {
      url: "/:item",
      templateUrl: "htmlTemplates/raffleItemListGo.html",
      controller: "raffleItemListGoCtrl"
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

   