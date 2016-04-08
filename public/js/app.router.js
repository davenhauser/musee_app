(function() {
   "use strict";
   angular
     .module('musee_app')
     .config(appRoutes);
 console.log("app_routes.js loaded!")
 appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];
     function appRoutes($urlRouterProvider, $stateProvider) {
       // Define routes/states on the state provider
       $stateProvider
         .state('welcome', {
            url: "/",
            templateUrl: "/js/welcome.html"
         })
         .state('signin', {
            url: "/signin",
            templateUrl: "/js/signin.html",
            controller: "SignInController",
            controllerAs: "vm"
         })
        .state("artwork", {
        url: "/searches",
        templateUrl: "/js/app/artists/artists.html",
        controller: "SearchesController",
        controllerAs: "vm"
      });

         $urlRouterProvider.otherwise("/");
     }
 })();
