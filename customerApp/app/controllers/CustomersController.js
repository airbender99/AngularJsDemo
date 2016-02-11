//custommerController.js
//customersApp.controller('customersController',customersController);
(function () {
    var customersController = function ($scope, customersFactory) {
        
        
        
        $scope.sortBy = 'name';//default sort;
        $scope.reverse = false;
        $scope.customers = [];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        
        function init(){
            $scope.customers = customersFactory.getCustomers();
        }
    
        init();
        //$scope.customers = customersFactory.getCustomers();
};
    customersController.$inject = ['$scope','customersFactory'];   
    
    //register the controller with the module
    angular.module('customersApp').controller('customersController',customersController);
}());
