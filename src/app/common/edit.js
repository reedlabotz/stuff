var editModule = angular.module('edit', []);
editModule.directive('ngBlur', function() {
    return function( scope, elem, attrs ) {
        elem.bind('blur', function() {
            scope.$apply(attrs.ngBlur);
        });
    };
});
editModule.directive('ngFocus', ['$timeout', function( $timeout ) {
    return function( scope, elem, attrs ) {
        scope.$watch(attrs.ngFocus, function( newval ) {
            if ( newval ) {
                $timeout(function() {
                    elem[0].focus();
                }, 0, false);
            }
        });
    };
}]);
