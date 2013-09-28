var navModule = angular.module('nav', []);
navModule.controller('NavCtrl', ['$scope', '$location', 'Model', function($scope, $location, Model) {
    $scope.model = Model;
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    }
}]);
