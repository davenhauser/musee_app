angular.module('ui.filters',[]).filter('unique', function () {

  return function (items, filterOn) {

    if (!filterOn) {
      return items;
    }

    if (filterOn && angular.isArray(items)) {

      var uniq = _.uniqBy(items, filterOn);
    }
    return uniq;
  };
})


