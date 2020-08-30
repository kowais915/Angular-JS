(function(){
'use strict';
    
angular.module('MyFirstApp', [])

    .controller('MyFirstController', function($scope){
  
    $scope.hello = function (){

          return "Hello";
    }
    $scope.name="Owais";


    });


    
})();