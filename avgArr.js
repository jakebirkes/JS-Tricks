function avgArr(arr) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) {
    s = s + arr[i]
  }
  avg = s / arr.length
  return avg;
}