var stuffModule = angular.module('stuff', []);
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
stuffModule.directive('ngBlur', function() {
    return function( scope, elem, attrs ) {
        elem.bind('blur', function() {
            scope.$apply(attrs.ngBlur);
        });
    };
});
stuffModule.directive('ngFocus', function( $timeout ) {
    return function( scope, elem, attrs ) {
        scope.$watch(attrs.ngFocus, function( newval ) {
            if ( newval ) {
                $timeout(function() {
                    elem[0].focus();
                }, 0, false);
            }
        });
    };
});