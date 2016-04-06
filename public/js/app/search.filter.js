/**
 * Filters out all duplicate items from an array by checking the specified key
 * @param [key] {string} the name of the attribute of each object to compare for uniqueness
 if the key is empty, the entire object will be compared
 if the key === false then no filtering will be performed
 * @return {array}
 */
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

// .filter('firstLetter', function () {
//     return function (input, letter) {
//         input = input || [];
//         var out = [];
//         input.forEach(function (item) {
//             //console.log("current item is", item, item.charAt(0));
//             if (item.charAt(0).toLowerCase() == letter) {
//                 out.push(item);
//             }
//         });
//         return out;
//     }
// });
