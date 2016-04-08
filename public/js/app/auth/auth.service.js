(function () {
  'use strict';

  angular
    .module('musee_app')
    .factory("authService", authService);

  authService.$inject = ["$log", "tokenService", "$http", "$state"];

  function authService($log, token, $http, $state) {
    $log.info("auth service loaded!");

    var service = {
      logIn:           logIn,
      isLoggedIn:      isLoggedIn,
      logOut:          logOut
    };

    return service;

    function logOut(){
      token.destroy();
      $state.go('signin')
      $log.info("logging out!");
    }

    function isLoggedIn() {
      return (token.retrieve() != null);
    }


    function logIn(data) {
      var promise = $http({
        method: 'POST',
        url:    '/api/token',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        // if the request succeeded, then run this
        // handler, and pass on the decoded token.
        function(res) {
          token.store(res.data.token);
          return token.decode();
        }
        // since there is no error handler, pass
        // an error on to the next promise, without
        // calling the above success handler
        // , function(err) { null; }
      );

      return promise;
    }
  }

})();
