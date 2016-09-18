(function() {
"use strict";

angular
  .module('starterApp')
  .factory('basicFactory', [basicFactory]);

  function basicFactory() {

    var factory = {

      sayHello: _sayHello

    }

    function _sayHello() {
      return "Hi!  I am coming from the basic Factory!";
    }


    return factory;

  }


})();