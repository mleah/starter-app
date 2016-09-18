(function() {

angular
  .module('starterApp')
  .controller('userInputController', ['$scope', 'basicFactory', userInputController]);

  function userInputController($scope, basicFactory) {

    $scope.helloTimesTwo = basicFactory.sayHello();

  }

})();