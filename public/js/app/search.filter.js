(function() {
  'use strict';

  angular.module('myFilters', [])

    .filter('creator', function() {

      return function(vm.search.title) {

      if (vm.search.title == piece.dcCreator[0])

      return piece.dcCreator[0]
    }

})();
