app.controller('MainController', ['$scope', function($scope) { 
    $scope.head = "The living paradise centers";
    $scope.places = [
        {
            name: "Irakli",
            description: "a place of freedom, where natual mystic blows through the air",
            img: "img/beach-irakli_5.jpg"
        },
        {
            name: "Koral",
            description: "It's a beach near Lozenets, it has a unique panoram views from different hills and rocks, clear, fresh water and absolutely no buildings! ",
            img: "img/beach.jpg"
        },
        {
            name: "Beglik Tash",
            description: "It's a unique place containing misterious, crazy formed rocks. Some call it the Bulgarian Stonehenge.",
            img: "img/Begliktash.jpg"
        }
    ]
}]);