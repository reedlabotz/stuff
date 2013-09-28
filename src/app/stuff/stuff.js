var stuffModule = angular.module('stuff', ['edit']);
stuffModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stuff/:section', {
        templateUrl:'stuff/stuff.tpl.html',
        controller:'StuffCtrl'
    });
}]);
stuffModule.controller('StuffCtrl', ['$scope', '$routeParams', 'Model', function($scope, $routeParams, Model) {
    $scope.model = Model;
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
stuffModule.directive('draggableTask', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            $element.attr('draggable', 'true');
            $element.bind('dragstart', function() {
                $scope.model.draggedTask = $element.scope().task;
            });
            $element.bind('dragend', function() {
                $scope.model.draggedTask = null;
            });
        }
    };
});
