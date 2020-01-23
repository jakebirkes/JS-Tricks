function partition (arr, length) {
  return [].concat.apply([],
      arr.map(function (elem, i) {
          return i % length ? [] : [arr.slice(i, i + length)];
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