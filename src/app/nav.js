var navModule = angular.module('nav', []);
navModule.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.projects = [
        {
            id: 'a',
            name: 'Project 1'
        },
        {
            id: 'b',
            name: 'Project 2'
        },
        {
            id: 'c',
            name: 'Project 3'
        }
    ];
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    }
}]);
