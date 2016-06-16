(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller', controller);

    controller.$inject = ['$scope']; 

    function controller($scope) {
        $scope.title = 'controller 6 Master Branch';

        activate();

        function activate() { }
    }
})();
