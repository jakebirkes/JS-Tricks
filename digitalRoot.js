/* 
let val = 6765;
*/

function digitalRoot (num) {
  while (num >= 10) {
    let digits = num.toString()
                    .split('')
                    .map(Number);
    num = sumArray(digits); // requires using the sumArray() function
  } return num;
}

/*

Is 6765 greater than or equal to 10? 

Yes, split then add! 
[6, 7, 6, 5], 6 + 7 + 6 + 5 = 24

Is 24 greater than or equal to 10? 

Yes, split then add!
[2, 4], 2 + 4 = 6

Is 6 greater than or equal to 10?

No! 
Therefore, 6 is the Digital Root of 6765!

digitalRoot(val);

Result: 
> 6
*/