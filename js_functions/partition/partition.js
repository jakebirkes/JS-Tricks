function partition(arr, length) {
  return [].concat.apply([],
    arr.map(function (elem, i) {
      return i % length ? [] : [arr.slice(i, i + length)];
    })
  );
}