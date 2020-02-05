/* OBSOLETE ~ Do this instead!
Example:
var sumArr = (acc, cur) => acc + cur;
let exArr = [1, 2, 3, 4, 5, 6];
exArr.reduce(sumArr) / exArr.length;
> 3.5
```
*/ 

function avgArr(arr) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) {
    s = s + arr[i]
  }
  avg = s / arr.length
  return avg;
}