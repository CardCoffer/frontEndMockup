(function() {
    
    var ContactsController = function ($scope) {
        $scope.contacts = {
        "DrrZNtnAuy" :{
        "avatar": "../assests/images/people/guUHjhx8wE.jpg",
        "backgroundColor": "white",
        "name": "Mostafa Purmehdi",
        "jobtitle": "Ph.D. Marketing",
        "affiliation": "HEC Montreal",
        "address": "Montreal, Canada",
        "phone": "5145708035",
        "email": "purmehdi@gmail.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "miniresume": "Businessman",
        "parent": "guUHjhx8wE"
         },
        "i1OOfskc9p" :{
        "avatar": "../assests/images/people/i1OOfskc9p.jpg",
        "backgroundColor": "white",
        "name": "Dr. Zohreh Sharafi",
        "jobtitle": "Postdoc in Computer Science",
        "affiliation": "Stanford University",
        "address": "Montreal, Canada",
        "phone": "5149921364",
        "email": "zohreh@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "miniresume": "PhD in CS",
        "parent": "NlPjdF5yK2"
         },
        "pv3NeClPkb" :{
        "avatar": "../assests/images/people/pv3NeClPkb.jpg",
        "backgroundColor": "white",
        "name": "Dr. Mahdi Milani Fard",
        "jobtitle": "Research Scientist and Software Engineer",
        "affiliation": "Google Research",
        "address": "Mountainview, USA",
        "phone": "650 123 1985",
        "email": "mahdi@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "miniresume": "Supersmart!",
        "parent": "guUHjhx8wE"
         },
        "DrrZNtnAuy" :{
        "avatar": "../assests/images/people/guUHjhx8wE.jpg",
        "backgroundColor": "white",
        "name": "Bachir Mouhyi",
        "jobtitle": "Junior Engineer, Traffic & Transportation analyst",
        "affiliation": "AECOM",
        "address": "Montreal, Canada",
        "phone": "514 574 4080",
        "email": "bachir@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "miniresume": "Intrested guy with a big mouth!",
        "parent": "guUHjhx8wE"
         },
        "DrrZNtnA77" :{
        "avatar": "../assests/images/people/guUHjhx8wE.jpg",
        "backgroundColor": "white",
        "name": "Sébastien Binet",
        "jobtitle": "Founder and Owner",
        "affiliation": "Innovations B4D",
        "address": "Montreal, Canada",
        "phone": "514 574 4080",
        "email": "sebastien@cardcoffer.com",
        "facebook": "", 
        "twitter": "", 
        "linkedin": "", 
        "googleplus": "",
        "miniresume": "Hardware guy!",
        "parent": "guUHjhx8wE"
         }       
        };
    };
    
    userController.$inject = ['$scope'];

    angular.module('ccApp')
      .controller('ContactsController', ContactsController);
    
}());