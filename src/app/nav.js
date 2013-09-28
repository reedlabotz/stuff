var navModule = angular.module('nav', []);
navModule.controller('NavCtrl', ['$scope', '$location', '$localStorage', '$model', function($scope, $location, $localStorage, $model) {
    $scope.storage = $localStorage;
    $scope.model = $model;
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1);
        return page === currentRoute ? 'active' : '';
    };
}]);
