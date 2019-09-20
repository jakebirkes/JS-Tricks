//Fibonacci Sequence limited by number

function fibSeq(n) {
    if (n < 2) {
      return [1];
    }
    if (n < 3) {
      return [1, 1];
    }

    var a = fibSeq(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
  }

/* 
fibSeq(24);

// Result

(24) [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368]

*/