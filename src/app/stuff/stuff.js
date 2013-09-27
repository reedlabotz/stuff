var stuffModule = angular.module('stuff', ['edit']);
stuffModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stuff/:section', {
        templateUrl:'stuff/stuff.tpl.html',
        controller:'StuffCtrl'
    });
}]);
stuffModule.controller('StuffCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.tasks = [
        {
            description: 'Task a',
            complete: false,
            section: 'today'
        },
        {
            description: 'Task b',
            complete: false,
            section: 'next'
        },
        {
            description: 'Task c',
            complete: true,
            section: 'today'
        }
    ];
    $scope.section = $routeParams.section;
    $scope.startEditing = function(task){
        task.editing=true;
        $scope.editedTask = task;
    }        
    $scope.doneEditing = function(task){
        task.editing=false;
        $scope.editedTask = null;
    }
}]);
