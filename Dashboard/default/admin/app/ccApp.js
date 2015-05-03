(function(){
	var ccApp = angular.module("ccApp",['ui.router']);

	ccApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('dash', {
      url: "/dash",
      templateUrl: "view/dashboard.html"
    })
    .state('pricing', {
      url: "/pricing",
      templateUrl: "view/pricingTable.html"
    })
    .state('studio', {
      url: "/studio",
      templateUrl: "view/portfolio.html"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "view/contacts.html"
    })

	});
}());