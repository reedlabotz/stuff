var localstorage = angular.module('localstorage',[]);
localstorage.service('$localStorage', ['$rootScope', function($rootScope) {
    var Storage = function() {
        this.timers = {};
    };
    Storage.prototype.createField = function(fieldName) {
        var _this = this;
        var items = JSON.parse(window.localStorage.getItem(fieldName)) || [];
        this[fieldName] = items;
        $rootScope.$watch(function() {
            return items;
        }, function(newValue, oldValue) {
            clearInterval(_this.timers[fieldName]);
            _this.timers[fieldName] = setTimeout(function() {
                window.localStorage.setItem(fieldName, JSON.stringify(newValue));
            }, 500);
        }, true);
    };

    return new Storage();
}]);