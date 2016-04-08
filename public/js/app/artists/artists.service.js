(function(){
    'use strict'

    angular
    .module("musee_app")
    .factory("searchService", searchService)

    searchService.$inject = ["$log", "$http", "$state"]

    function searchService($log, $http, $state){
      $log.info("searchService loaded!")

      var vm = {};

      vm.currentArtist = {
        author: undefined,
        works: []
      };

      vm.data = searchService
      var service = {
        search: search
      };

      return service

    function search(author) {
      var art = $http.get('api/searches?author=' + author)
      .then(function(res) {
        $log.info("Search Test ", res.data);
        // $log.info("Author: ",res.data[0].author);
        return res.data;
      });
      return art;
    }
    return vm;

      }
})();
