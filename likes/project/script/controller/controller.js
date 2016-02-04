app.controller('mainController', ['$scope', function($scope){
    $scope.items = [
        {
            name: "ball",
            cost: 9.99,
            img: "img/ball.png"
        },
        {
            name: "drone",
            cost: 1999,
            img: "img/drone.jpg"
        },
        {
            name: "headset",
            cost: 100,
            img: "img/headset.jpg"
        }
        
        
    ];
}]);