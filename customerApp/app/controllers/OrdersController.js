//orders controller
(function(){
    'use strict'// does not allow to create variables without var keyword to avoid creating global variables.
    //test = 'Hello';
    var OrdersController = function($scope, $routeParams, customersFactory){
        var customerId = $routeParams.customerId;
        //$scope.orders = null;
        $scope.customer = null;
        
        function init(){
            //$scope.customers = customersFactory.getCustomers();
            //for(var i=0, len = $scope.customers.length; i<len ;i++){
            //    if($scope.customers[i].id === parseInt(customerId)){
            //        $scope.orders = $scope.customers[i].orders;
            //        break;
            //    }
            //}
            
            //$scope.customer = customersFactory.getCustomer(customerId);
            
            customersFactory.getCustomer(customerId)
            .success(function(customer){
                $scope.customer = customer;
            })
            .error(function(data,status,headers,config){
                //Handle the error;
            })
        }
        
        init();
    }
    
    OrdersController.$inject = ['$scope','$routeParams','customersFactory'];
    angular.module('customersApp').controller('OrdersController',OrdersController);
}());
