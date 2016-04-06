(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SearchesController", SearchesController);

  SearchesController.$inject = ["$log", "searchService", "$http"];

  function SearchesController($log, searchService, $http) {
    var vm = this;
    $log.info("this is the searchService", searchService)

    vm.arts = [];

    vm.getArtWork = getArtWork;

    vm.getArtWork();

    function getArtWork() {
      $http.get('api/searches').then(function(response) {
        vm.getArtWork = response.data;
        $log.info("What is the data", response)
        console.log("vm.getArtWork: ", vm.getArtWork)
      }, function(errRes) {
        console.error('Error catchin artWork!', errRes);
      });
    }

  }
})();
