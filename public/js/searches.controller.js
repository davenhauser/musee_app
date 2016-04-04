(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SearchesController", SearchesController);

  SearchesController.$inject = ["$log"];

  function SearchesController($log) {
    var vm = this;

    vm.art ;
    // getArt();

    // function getArt() {

        // .getArt()
        // .then(function(response){

        // vm.art = response;
        // }, function(error) {
        //   $log.error(error);
        // }
      // );
    // }
  }
})();
