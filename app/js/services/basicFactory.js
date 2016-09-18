(function() {
"use strict";

angular
  .module('starterApp')
  .factory('basicFactory', [basicFactory]);

  function basicFactory() {

    var factory = {

      sayHelloFactory: _sayHelloFactory

    }

    function _sayHelloFactory() {
      return "Hi!  I am coming from the basic Factory!";
    }


    return factory;

  }


})();