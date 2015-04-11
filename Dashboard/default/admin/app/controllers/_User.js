(function() {
    
    var userController = function ($scope) {
        $scope.user = {
        "objectId": "NlPjdF5yK2",
        "username": "saberi.ar.eng@gmail.com",
        "emailVerified": "true",
        "email": "saberi.ar.eng@gmail.com",
        "myOwnCards": "['zIlHxyotrV','i1OOfskc9p','pv3NeClPkb','sdNuOoa7L2']", 
        "name": "Alireza",
        "profile": "Ali",
        "surname": "Saberi",
        "image": "../assests/images/people/NlPjdF5yK2.jpg"
        };
    };
    
    userController.$inject = ['$scope'];

    angular.module('ccApp')
      .controller('userController', userController);
    
}());