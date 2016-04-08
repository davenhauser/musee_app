(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "authService", "userService", "$state"];

  function SignInController($log, authService, userService, $state) {
    var vm = this;

    // BINDINGS
    vm.submitSignUp = submitSignUp;
    vm.logIn = {
      email:    "pj@ga.co",
      password: "12345"
    };
    vm.submitLogIn = submitLogIn;
    vm.conflict = false;

    // FUNCTIONS

    function submitSignUp() {
      vm.signUp = {
        email:    vm.email,
        name:     vm.name,
        password: vm.password,
        passwordConfirmation: vm.passwordConfirmation
      };
      console.log("vm.signUp",vm.signUp)
      userService
        .create(vm.signUp)
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken);
            $state.go('welcome');
          },
          // on error
          function(err) {
            if (err.status === 409) vm.conflict = true;
            $log.info('Error Claire-r:', err);
          }
        );
    }

    function submitLogIn() {
      authService
        .logIn(vm.logIn)
        .then(
          // on success
          function(decodedToken) {
            $log.info('Logged in!', decodedToken);
            $state.go('welcome');
          },
          // on error
          function(err) {
            $log.info('Error:', err);
          }
        );
    }

    $log.info("SignInController loaded!");
  }
})();
