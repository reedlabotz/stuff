var stuffModule = angular.module('stuff', ['edit']);
stuffModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stuff/:section', {
        templateUrl:'stuff/stuff.tpl.html',
        controller:'StuffCtrl'
    });
}]);
stuffModule.controller('StuffCtrl', ['$scope', '$routeParams', '$localStorage', '$model', function($scope, $routeParams, $localStorage, $model) {
    $scope.storage = $localStorage;
    $scope.model = $model;
    $scope.section = $routeParams.section;
    $scope.model.newTaskAction = ["section", $scope.section];
    $scope.startEditing = function(task){
        task.editing=true;
        $scope.editedTask = task;
    };      
    $scope.doneEditing = function(task){
        task.editing=false;
        $scope.editedTask = null;
    };
}]);
stuffModule.directive('draggableTask', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            $element.attr('draggable', 'true');
            $element.bind('dragstart', function(e) {
                $scope.model.draggedTask = $element.scope().task;
                e.dataTransfer.setDragImage(e.target, 20, 20);
            });
            $element.bind('dragend', function(e) {
                $scope.model.draggedTask = null;
            });
        }
    };
});
