var navModule = angular.module('nav', []);
navModule.controller('NavCtrl', ['$scope', '$location', '$localStorage', '$model', function($scope, $location, $localStorage, $model) {
    $scope.tasks = $localStorage.tasks;
    $scope.projects = $localStorage.projects;
    $scope.model = $model;
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1);
        return page === currentRoute ? 'active' : '';
    };
}]);
