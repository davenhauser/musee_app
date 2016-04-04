(function(){
    'use strict'

    angular
    .module('musee_app')
    .controller('ArtistController', ArtistController)

    ArtistController.$inject = ["$log", "searchService"];

    function ArtistController($log, searchService){
    var vm = this;
    $log.info("this is the searchService", searchService)

    vm.art
    getArt();
    vm.searchService = searchService;
    $log.info("does this work?: ", searchService.art)


    function getArt() {
        searchService
        .getArt()
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