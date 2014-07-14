'use strict';

angular.module('mean.dragstar').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('dragstar example page', {
            url: '/dragstar/example',
            templateUrl: 'dragstar/views/index.html'
        });
    }
]);
