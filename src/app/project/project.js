var projectModule = angular.module('project', []);
projectModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/project/:id', {
        templateUrl:'project/project.tpl.html',
        controller:'ProjectCtrl'
    });
}]);
projectModule.controller('ProjectCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
}]);