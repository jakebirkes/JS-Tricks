//this isn't quite working the way I'm expecting, will fix soon JB

/* 
let val = 6765;
*/

function digitalRoot (value) {
    for (; value >= 10;) {
    var digits = value.toString().split('');
    var splitNum = digits.map(Number);
    value = sumArray(splitNum); // requires using the sumArray() function
  }
}


/*

6765 is greater than 10 => split! => [6, 7, 6, 5]
6 + 7 + 6 + 5 = 24
24 is greater than 10 => split! => [2, 4]
2 + 4 = 6
6 is less than 10 => 

6 is the Digital Root of 6765!
*/