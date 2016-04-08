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
    vm.currentArtist = {
      author: undefined,
      art: []
    };

    vm.setArtist = function(artistName) {
      // vm.currentArtist.author = artistName;
      // console.log(vm.currentArtist);
      vm.currentArtist.author = artistName;
      $http.post('/api/artists', {author: artistName})
           .then(function(res){
            vm.currentArtist.art = res.data;
           }, function(err){
            $log.info(err);
           })
    }

    vm.clearArtist = function() {
      vm.currentArtist = {
        author: undefined,
        art: []
      };
      vm.query = undefined;
      vm.artWork = [];
    }

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

    // function test() {
    //   console.log("test1: ",vm.query);
    //   console.log("test2: ",vm.author);
    //   vm.artWork = vm.query
    // }

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
