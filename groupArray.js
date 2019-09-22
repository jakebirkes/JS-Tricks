//this allows to group the array by any number we wish
function groupArray (array, groupSize) {
  return [].concat.apply([],
      array.map(function (elem, i) {
          return i % groupSize ? [] : [array.slice(i, i + groupSize)];
      })
  );
}

/*

Example:

  let thisArray = [0, 1, 2, 3, 4, 5, 6, 7];
  groupArray(thisArray, 2); //grouping them in pairs

Result:
  >(4) [Array(2), Array(2), Array(2), Array(2)]
    0: (2) [0, 1]
    1: (2) [2, 3]
    2: (2) [4, 5]
    3: (2) [6, 7]
    length: 4
    __proto__: Array(0)

*/