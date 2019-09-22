# JS-Tricks

## fibSeq

Fibonacci Sequence limited by length using `fibSeq([num])`

## Example:
```js
fibSeq(24);
```
## Result:
`
(24) [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368]
`
## sumArray

Get the total sum of an array using `sumArray()`

### Example:
``` js
let exArr = [1, 2, 3, 4, 5, 6];

sumArray(exArr);
```

### Result:
`
21
`

## multArray
Multiply an array using `multArray()`

### Example:
``` js
let exArr = [1, 2, 3, 4, 5, 6];

multArray(exArr);
```

### Result:
`
720
`
## avgArray

Get the average of an array using `avgArray()`.

### Example:
``` js
let exArr = [1, 2, 3, 4, 5, 6];

avgArray(exArr);
```

### Result:
`
3.5
`
## groupArray

You can regroup an array into sub-arrays using `groupArray()`

### Example:
```js

let thisArray = [0, 1, 2, 3, 4, 5, 6, 7];

groupArray(thisArray, 2); //grouping them in pairs
```
### Result:
```
(4) [Array(2), Array(2), Array(2), Array(2)]
    0: (2) [0, 1]
    1: (2) [2, 3]
    2: (2) [4, 5]
    3: (2) [6, 7]
    length: 4
    __proto__: Array(0)"
```

## digitalRoot

Find the digital root of a non-negative integer by using `digitalRoot()`. The process continues until a single-digit number is reached. 

### Huh? 

For example, let's take the number 6765. If a number is greater than or equal to 10, we split the number by its digits and add them together. We will continue this process until it's less than 10.

```
Is 6765 greater than or equal to 10? 

Yes, split then add! 
[6, 7, 6, 5], 6 + 7 + 6 + 5 = 24

Is 24 greater than or equal to 10? 

Yes, split then add!
[2, 4], 2 + 4 = 6

Is 6 greater than or equal to 10?

No! 
Therefore, 6 is the Digital Root of 6765!
```
### Example:
```js
let val = 6765;

digitalRoot(val);
```

### Result: 

`
6
`
## lazySrc

Solution for Shopify's lazyload.js will create a new `src` attribute by replace '{width}' in `data-src` with a chosen value from `data-widths` array using `lazySrc([obj], [num])`.

*Currently written in jQuery*

### Example:
``` js
let target = $(`<img 
                class="lazyload" 
                data-src="//cdn.shopify.com/s/files/path/to/example-{width}px.jpg" 
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `); 

lazySrc(target, 3); // 3 = 1080

console.log(target.attr('src'));
```
### Result:
`
"//cdn.shopify.com/s/files/path/to/example-1080px.jpg"
`
