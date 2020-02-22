function digRoot(num:number) {
  let sumArr = (acc:number, cur:number) => acc + cur;
  while (num >= 10) {
    let digits = num.toString()
      .split('')
      .map(Number);
    num = digits.reduce(sumArr);
  }
  return num;
}