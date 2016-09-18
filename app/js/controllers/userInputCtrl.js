(function() {

angular
  .module('starterApp')
  .controller('userInputController', ['$scope', userInputController]);

  function userInputController($scope) {

    $scope.helloTimesTwo = "Hey I am a nested controller!!";

  }

})();