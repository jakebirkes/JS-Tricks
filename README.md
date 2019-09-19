# JS-Tricks

## sumArray

Get the total sum of an array.

### Example:
``` js
let exArr = [5, 7, 12, 18];
sumArray(exArr);
```

### Result:
```
> 42
```

## groupArray

You can regroup an array into sub-arrays

### Example:
```js

let thisArray = [0, 1, 2, 3, 4, 5, 6, 7];
let newArrayGroups = thisArray.groupArray(2); //grouping them in pairs
console.log(newArrayGroups);

```
### Result:
```
> (4) [Array(2), Array(2), Array(2), Array(2)]
    0: (2) [0, 1]
    1: (2) [2, 3]
    2: (2) [4, 5]
    3: (2) [6, 7]
    length: 4
    __proto__: Array(0)"

```

## lazySrc

Solution for Shopify's lazyload, replace '{width}' with value from data-widths array

### Example:
``` js
let node = $(`<img 
                class="lazyload" 
                data-src="//cdn.shopify.com/s/files/path/to/example/{width}x.jpg" 
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `); 

lazySrc(node);
console.log(node.attr('src'));

```
### Result:
```
> "//cdn.shopify.com/s/files/path/to/example/1080x.jpg"
```