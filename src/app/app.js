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
appModule.controller('AppCtrl', ['$scope', '$localStorage', '$model', function($scope, $localStorage, $model) {
    $scope.storage = $localStorage;
    $scope.model = $model;
    $scope.addTask = function() {
        var task = {};
        task[$scope.model.newTaskAction[0]] = $scope.model.newTaskAction[1];
        task.description = "New task";
        task.editing = true;
        $scope.storage.tasks.unshift(task);
    };
}]);
