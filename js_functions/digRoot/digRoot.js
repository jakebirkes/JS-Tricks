function digRoot(num) {
    var sumArr = (acc, cur) => acc + cur;
    while (num >= 10) {
        let digits = num.toString()
            .split('')
            .map(Number);
        num = digits.reduce(sumArr);
    }
    return num;
}
