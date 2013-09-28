var commonModule = angular.module('common', []);
commonModule.service('Model', function() {
    var Model = function() {
        this.projects = {
            a: {
                id: 'a',
                name: 'Project 1'
            },
            b: {
                id: 'b',
                name: 'Project 2'
            },
            c: {
                id: 'c',
                name: 'Project 3'
            }
        };
        this.tasks = [
            {
                description: 'Task a',
                complete: false,
                section: 'today',
                project: 'a'
            },
            {
                description: 'Task b',
                complete: false,
                section: 'next',
                project: 'b'
            },
            {
                description: 'Task c',
                complete: true,
                section: 'today'
            }
        ];
    };
    return new Model();
});
commonModule.directive('dropTarget', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
            $element.attr("dropzone", "link");
            $element.bind('dragenter', function(e) {
                e.preventDefault();
            });
            $element.bind('dragover', function(e) {
                e.preventDefault();
            });
            $element.bind('dragleave', function(e) {
                e.preventDefault();
            });
            $element.bind('drop', function(e) {
                var action = $attrs.dropTarget.split(":");
                $scope.$apply(function () {
                    $scope.model.draggedTask[action[0]] = action[1];
                });
            });
        }
    };
});
