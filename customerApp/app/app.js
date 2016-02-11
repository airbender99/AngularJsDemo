(function(){
    var customersApp = angular.module('customersApp',['ngRoute']);
    customersApp.config(function($routeProvider){
        $routeProvider
        .when('/',{
              controller: 'customersController',
              templateUrl:'app/Views/Customers.html'
              })
        .when('/orders/:customerId',{
            controller:'OrdersController',
            templateUrl: 'app/Views/Orders.html'
        })
        .otherwise({redirectTo:'/'})
    })
}());
