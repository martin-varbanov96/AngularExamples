app.directive("appInfo", function(){
    return{
        restrict: "E",
        scope: {
            info: '='
        },
        templateUrl: "script/directives/dir.html"
    }
});