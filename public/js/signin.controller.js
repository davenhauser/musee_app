
(function() {
  "use strict";

  angular
    .module("musee_app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "authService", "userService"];

  function SignInController($log, authService, userService) {
    var vm = this;

    // BINDINGS
    vm.signUp = {
      email:    "test@emaik.com",
      name:     "Tom Hanks",
      password: "12345",
      passwordConfirmation: "12345"
    };
    vm.submitSignUp = submitSignUp;
    vm.logIn = {
      email:    "pj@ga.co",
      password: "12345"
    };
    vm.submitLogIn = submitLogIn;

    // FUNCTIONS
    function submitSignUp() {
      userService.create(vm.signUp)
    }

    function submitLogIn() {
      authService.logIn(vm.logIn);
    }

    $log.info("SignInController loaded!");

     function generateToken() {
       $http
         .post('/api/token', vm.signUp, {
           headers: {
             'Content-Type': 'application/json'
           }
         })
         .then(
           function(res) {

             tokenService.store(res.data.token)
             $log.info("Succes:", tokenService.decode());
             $log.info("Success:", tokenService.destroy());
             // $log.info("Destroyed:", tokenService.retrieve());
           },
           function(err) { $log.info("Error:", err); }
         );
     }

     $log.info("SignInController loaded!");
   }
 })();
