(function() {
    
    var userController = function ($scope,userFactory) {
        $scope.user = user;

    };
    
    userController.$inject = ['$scope','userFactory'];

    angular.module('ccApp')
      .controller('userController', userController);
    
}());