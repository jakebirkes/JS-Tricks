function digRoot (num) {
  var sumArr = (acc, cur) => acc + cur;
  while (num >= 10) {
    let digits = num.toString()
                    .split('')
                    .map(Number);
    num = digits.reduce(sumArr);
  } return num;
}

/* OBSOLETE: NO LONGER USING sumArray()
function digitalRoot (num) {
  while (num >= 10) {
    let digits = num.toString()
                    .split('')
                    .map(Number);
    num = sumArray(digits); // requires using the sumArray() function
  } return num;
}
*/