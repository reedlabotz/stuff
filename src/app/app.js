var appModule = angular.module('app', [
    'common',
    'nav',
    'stuff',
    'project',
    'localstorage',
    'templates.app']);

appModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo:'/stuff/today'});
}]);
appModule.controller('AppCtrl', ['$scope', '$localStorage', '$model', function($scope, $localStorage, $model) {
    var storage = $localStorage;
    storage.createField('tasks');
    storage.createField('projects');
    $scope.tasks = $localStorage.tasks;
    $scope.projects = $localStorage.projects;
    $scope.model = $model;
    $scope.addTask = function() {
        var task = {};
        task[$scope.model.newTaskAction[0]] = $scope.model.newTaskAction[1];
        task.description = "New task";
        $model.editedTask = task;
        $scope.tasks.unshift(task);
    };
}]);
