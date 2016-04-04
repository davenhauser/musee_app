(function(){
    'use strict'

    angular
    .module("musee_app")
    .factory("searchService", searchService)

    searchService.$inject = ["$log", "$http", "$state"]

    function searchService($log, $http, $state){
      $log.info("searchService loaded!")

      var service = {
        getArt: getArt
      };

      return service

      function getArt(data){
        var art = $http({
        method: "GET",
        url: "api/searches/art",
        data:  data
      })
      .then(function(res){
        $log.info(res.data.items[0].country[0]);
        return res.data.items[0];
      });
      return art;
    }
      }
})();
