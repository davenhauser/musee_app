(function(){
  'use strict'

  angular.module("musee_app")
  .controller("ImageController", ImageController)

  ImageController.$inject = ["$http", "$log"]

  function ImageController($http, $log){
    var vm = this;

 $log.info("ImageController loaded!")
  }


})();
