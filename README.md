# JS-Tricks

## sumArray & multArray

Get the total sum of an array using `sumArray`

### Example:
``` js
let exArr = [1, 2, 3, 4, 5, 6];

sumArray(exArr);
```

### Result:
```
> 21
```

## multArray
Multiply an array using `multArray()`

### Example:
``` js
let exArr = [1, 2, 3, 4, 5, 6];

multArray(exArr);
```

### Result:
```
> 720
```

## groupArray

You can regroup an array into sub-arrays using `groupArray()`

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

Solution for Shopify's lazyload> It will create a new `src` attribute by replace '{width}' in `data-src` with a chosen value from `data-widths` array using `lazySrc([obj], [num])`.

### Example:
``` js
let node = $(`<img 
                class="lazyload" 
                data-src="//cdn.shopify.com/s/files/path/to/example-{width}px.jpg" 
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `); 

lazySrc(node, 3); // 3 = 1080

console.log(node.attr('src'));
```
### Result:
```
> "//cdn.shopify.com/s/files/path/to/example-1080px.jpg"
```