(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SearchesController", SearchesController);

  SearchesController.$inject = ["$log", "searchService"];

  function SearchesController($log, searchService) {
    var vm = this;
    $log.info("this is the searchService", searchService)

    // vm.artCountry = {
    //   country: searchService
    // } ;
    getArt();
    vm.searchService = searchService;

    function getArt() {
        searchService
        .getArt()
        .then(function(response){

        vm.art = response;
        }, function(error) {
          $log.error(error);
        }
      );
    }
  }
})();
