(function () {
  'use strict';

  angular
    .module('musee_app')
    .factory("authService", authService);

  authService.$inject = ["$log", "tokenService", "$http"];

  function authService($log, tokenService, $http) {
    $log.info("auth service loaded!");

    var service = {
      logIn: logIn
    };
    return service;

    function logIn(data) {
      $http({
        method: 'POST',
        url:    '/api/token',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        function(res) {
          tokenService.store(res.data.token);
          $log.info("Success:", tokenService.decode());
        },
        function(err) { $log.info("Error:", err); }
      );
    }
  }

})();
