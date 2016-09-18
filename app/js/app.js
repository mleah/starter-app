(function() {
'use strict';

  angular
    .module('starterApp', ['ngSanitize', 'ui.router'])
    

    .config(function($stateProvider) {
      $stateProvider.state('userInput', {
        url: '/userInput',
        templateUrl: 'views/userInput.html',
        controller: 'userInputController'
      })
    })


    .run(function($location) {

      $location.url('/userInput');

    });

})();
