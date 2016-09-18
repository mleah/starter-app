(function() {
  'use strict';

  angular
    .module('starterApp')
    .controller('mainController', ['$scope', mainController]);


  function mainController($scope) {

    $scope.hello = "HI!!!!!";

  }

})();