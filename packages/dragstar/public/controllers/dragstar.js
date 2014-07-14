'use strict';

angular.module('mean.dragstar').controller('DragstarController', ['$scope', 'Global', 'Dragstar',
    function($scope, Global, Dragstar) {
        $scope.global = Global;
        $scope.package = {
            name: 'dragstar'
        };
    }
]);
