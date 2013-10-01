var commonModule = angular.module('common', []);
commonModule.service('$model', function() {
    var Model = function() {
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
                $element.addClass('drop-target');
            });
            $element.bind('dragover', function(e) {
                e.preventDefault();
                $element.addClass('drop-target');
            });
            $element.bind('dragleave', function(e) {
                e.preventDefault();
                $element.removeClass('drop-target');
            });
            $element.bind('drop', function(e) {
                var action = $attrs.dropTarget.split(":");
                $scope.$apply(function () {
                    $scope.model.draggedTask[action[0]] = action[1];
                });
                $element.removeClass('drop-target');
            });
        }
    };
});
