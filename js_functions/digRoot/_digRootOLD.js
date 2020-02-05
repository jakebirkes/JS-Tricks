/* OBSOLETE: Do NOT USE sumArray() */
function digitalRoot(num) {
    while (num >= 10) {
        let digits = num.toString()
            .split('')
            .map(Number);
        num = sumArray(digits); // requires using the sumArray() function
    }
    return num;
}