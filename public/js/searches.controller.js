(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SearchesController", SearchesController);

  SearchesController.$inject = ["$log", "searchService"];

  function SearchesController($log, searchService) {
    var vm = this;
    $log.info("this is the searchService", searchService)
  }
})();
