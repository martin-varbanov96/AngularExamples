app.controller('likeController', ['$scope', function($scope){
    $scope.posts =  [
        {
            
            name: "Loshata",
            desc: 'Sometimes it\' more important to be happy than to be happy',
            date: new Date("2015", '02', '02'),
            likes: 0
        },
        {
            name: "Dobrata",
            desc: "Only god can judge me",
            date: new Date("2015", "12", '12'),
            likes: 0
        }
    ];
    
    $scope.onClickLike = function (index){
        $scope.posts[index].likes +=1;
    };
    
}]);