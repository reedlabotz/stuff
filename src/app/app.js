angular.module('app', [
    'nav',
    'templates.app']);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.otherwise({redirectTo:'/stuff/today'});
}]);

angular.module('app').controller('AppCtrl', ['$scope', function($scope) {
}]);