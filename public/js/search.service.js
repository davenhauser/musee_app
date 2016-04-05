(function(){
    'use strict'

    angular
    .module("musee_app")
    .factory("searchService", searchService)

    searchService.$inject = ["$log", "$http", "$state"]

    function searchService($log, $http, $state){
      $log.info("searchService loaded!")

      var vm = this;

      vm.data = searchService
      var service = {
        search: search
      };

      return service

      function search(data){
        console.log(data);
        var art = $http({
        method: "GET",
        url: "api/searches/art?title=" + data,
        data:  data
      })
      .then(function(res){
        $log.info("Search Test ",res.data.items[0]);
        // $log.info("Country ",res.data.items[0].country[0]);
        return res.data.items;
      });
      return art;
    }
      }
})();
