(function() {

angular
  .module('starterApp')
  .controller('userInputController', ['$scope', 'basicFactory', userInputController]);

  function userInputController($scope, basicFactory) {

    $scope.helloTimesTwo = basicFactory.sayHelloFactory();


    $scope.sayHello = _sayHello;

    function _sayHello(name) {

      $scope.greeting = "Hello " + name + " !";

    }

  }

})();