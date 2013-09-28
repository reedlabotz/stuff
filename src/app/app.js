var appModule = angular.module('app', [
    'common',
    'nav',
    'stuff',
    'project',
    'ngStorage',
    'templates.app']);

appModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo:'/stuff/today'});
}]);
appModule.controller('AppCtrl', ['$scope',function($scope) {

}]);
