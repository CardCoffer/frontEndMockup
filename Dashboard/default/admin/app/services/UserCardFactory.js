(function() {
    
    var userCardController = function ($scope) {
        $scope.card = {
                        "AliSabCard1" :{
                        "avatar": "../assests/images/people/guUHjhx8wE.jpg",
                        "backgroundColor": "white",
                        "name": "Alireza Saberi",
                        "jobtitle": "Ph.D. Computer Science",
                        "affiliation": "McGill",
                        "address": "Montreal, Canada",
                        "phone": "5148390936",
                        "fax":"",
                        "email": "ali@cardcoffer.com",
                        "facebook": "", 
                        "twitter": "", 
                        "linkedin": "", 
                        "googleplus": "",
                        "pinterest":"",
                        "miniresume": "Smart guy!",
                        "parent": "guUHjhx8wE"
        }
    }
    };
    
    userCardController.$inject = ['$scope'];

    angular.module('ccApp')
      .controller('userCardController', userCardController);
    
}());