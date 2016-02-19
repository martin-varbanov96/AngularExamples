var app = angular.module('myApp', []);
app.controller('StartUpController', function($scope) {
    $scope.funding = { startingEstimate: 0 };
    computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
    $scope.$watch('funding.startingEstimate', computeNeeded);
});