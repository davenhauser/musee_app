(function(){
    'use strict'

    angular
    .module('musee_app')
    .controller('ArtistController', ArtistController)

    ArtistController.$inject = ["$log", "searchService", "$state"];

    function ArtistController($log, searchService, $state){
    var vm = this;
    $log.info("this is the searchService", searchService)

    vm.art
    getArt();
    vm.searchService = searchService;

    vm.getArt = function() {
      console.log("vm.search.author", vm.search.author);
      console.log("check getArt function");
       var author = vm.search.author;
       $state.go("artist");
        searchService
        .search(author)
        .then(function(response){
          vm.art = response;
          $log.info("new one", response)
        }, function(error) {
          $log.error(error);
        }
      );
    }
  }
})();
