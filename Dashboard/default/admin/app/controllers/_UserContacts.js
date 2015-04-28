(function() {
    
    var ContactsController = function ($scope) {
        $scope.isActive = function(contacts) {
            return contacts.User.Stats[0].active === "1";
        };
        $scope.sortBy = null;
        $scope.reverse = false;
        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = ! $scope.reverse;
        };
        $scope.contacts = [
        {
        "ID": "Mostafa",  
        "avatar": "../assets/images/people/Mostafa.jpg",
        "backgroundColor": "white",
        "name": "Mostafa Purmehdi",
        "jobtitle": "Ph.D. Marketing",
        "affiliation": "HEC Montreal",
        "address": "Montreal, Canada",
        "phone": "5145708035",
        "fax":"5148390936",
        "email": "purmehdi@gmail.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "note": "Businessman",
        "parent": "guUHjhx8wE"
        },
        {
        "ID":"Zohreh", 
        "avatar": "../assets/images/people/zohreh.jpg",
        "backgroundColor": "white",
        "name": "Dr. Zohreh Sharafi",
        "jobtitle": "Postdoc in Computer Science",
        "affiliation": "Stanford University",
        "address": "Montreal, Canada",
        "phone": "5149921364",
        "fax":"5148390936",
        "email": "zohreh@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "note": "PhD in CS",
        "parent": "NlPjdF5yK2"
         },
        {
        "ID":"Mahdi",
        "avatar": "../assets/images/people/mahdi.jpg",
        "backgroundColor": "white",
        "name": "Dr. Mahdi Milani Fard",
        "jobtitle": "Research Scientist and Software Engineer",
        "affiliation": "Google Research",
        "address": "Mountainview, USA",
        "phone": "650 123 1985",
        "fax":"5148390936",
        "email": "mahdi@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "note": "Supersmart!",
        "parent": "guUHjhx8wE"
         },
        {
        "ID":"Bachir",
        "avatar": "../assets/images/people/bachir.jpg",
        "backgroundColor": "white",
        "name": "Bachir Mouhyi",
        "jobtitle": "Junior Engineer, Traffic & Transportation analyst",
        "affiliation": "AECOM",
        "address": "Montreal, Canada",
        "phone": "514 574 4080",
        "fax":"5148390936",
        "email": "bachir@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "note": "Intrested guy with a big mouth!",
        "parent": "guUHjhx8wE"
         },
        {
        "ID":"Sebastian",
        "avatar": "../assets/images/people/seb.jpg",
        "backgroundColor": "white",
        "name": "Sébastien Binet",
        "jobtitle": "Founder and Owner",
        "affiliation": "Innovations B4D",
        "address": "Montreal, Canada",
        "phone": "514 574 4080",
        "fax":"5148390936",
        "email": "sebastien@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "note": "Hardware guy!",
        "parent": "guUHjhx8wE"
         }       
        ];
    };
    
    ContactsController.$inject = ['$scope'];

    angular.module('ccApp')
      .controller('ContactsController', ContactsController);
    
}());