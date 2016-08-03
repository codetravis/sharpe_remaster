var app = angular.module('sharpe_app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'home.html' })
    .when('/range', { templateUrl: 'range.html' })
    .when('/gun_rentals', { templateUrl: 'gun_rentals.html' })
    .otherwise({ redirectTo: '/' });
}]);
