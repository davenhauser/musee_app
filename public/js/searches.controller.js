(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SearchesController", SearchesController);

  SearchesController.$inject = ["$log", "searchService", "$http", "$state"];

  function SearchesController($log, searchService, $http, $state) {
    var vm = this;

    vm.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    $log.info("this is the searchService", searchService)

    vm.arts = [];

    // getArtWork();


    function getArtWork() {
      $http.get('api/searches').then(function(response) {
        vm.artWork = response.data;
        // $log.info("What is the data", response.data)
        // console.log("vm.getArtWork: ", vm.getArtWork)
      }, function(errRes) {
        console.error('Error catchin artWork!', errRes);
      });
    }

    //  function getArtist() {
    //   $http.get('api/searches').then(function(response) {
    //     vm.getArtWork = response.data[0].author;
    //     $log.info("What is the data", response.data[0].author)
    //     // console.log("vm.getArtWork: ", vm.getArtWork)
    //   }, function(errRes) {
    //     console.error('Error catchin artWork!', errRes);
    //   });
    // }

    vm.art = [];
    vm.searchService = searchService;

    vm.getArt = getArt;

     function getArt() {
      console.log("vm.search: ",vm.query);
      console.log("check getArt function");
       var author = vm.query;
       // $state.go("artist");
        searchService
        .search(author)
        .then(function(data){
          vm.artWork = data;
          $log.info("new one", data)
        }, function(error) {
          $log.error(error);
        }
      );
    }
  }
})();
