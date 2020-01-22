# Functions

## `fibSeq`

Fibonacci Sequence limited by length using `fibSeq()`.

### Example:

```js
fibSeq(6); // only taking the first 6

> [1, 1, 2, 3, 5, 8]
```

## `sumArray`, `subArray`, & `multArray`

To find the sum-total of sub-total of an array, as well as muliplying all items of array and finding the average. We do this by making use of `.reduce()` and the arrow `=>` function. You'll see it's the same basic line with different operators each corresponding to the variable name.

### `sumArray`

```js
const sumArray = (acc, cur) => acc + cur;
```

#### Example

``` js
let exArray = [1, 2, 3, 4, 5, 6];

exArray.reduce(sumArray);
> 21 // 1 + 2 + 3 + 4 + 5 + 6

let exArraytwo = [[0, 1], [2, 3], [4, 5]];
exArrayTwo[2].reduce(sumArray);
> 9 // 4 + 5
```

### `subArray`

```js
const subArray = (acc, cur) => acc - cur;
```

#### Example

``` js
let exArray = [1, 2, 3, 4];

exArray.reduce(subArray);
> -8 // 1 - 2 ...
```

### `multArray`

```js
const multArray = (acc, cur) => acc * cur;
```

#### Example

``` js
let exArr = [1, 2, 3, 4, 5, 6];

exArr.reduce(multArray);

> 720
```

### Find the average easily with `multArray`

~~Get the average of an array using `avgArray()`.~~

**There is a much simpler way of finding the average of an array. Just use `multArray` as mentioned above and divide by `.length`:**

#### Example

```js
let exArr = [1, 2, 3, 4, 5, 6];

exArr.reduce(multArray) / exArr.length;

> 3.5
```

## `groupArray`

You can nest arrays in one by any size you need using `groupArray(array, length)`.

### Example

```js

let thisArray = [0, 1, 2, 3, 4, 5, 6, 7];

groupArray(thisArray, 2); // grouping them in pairs

> [[0, 1], [2, 3], [4, 5], [6, 7]]
```

## `flatArray`

If you need to "flatten" these nested arrays back into one array. Use the following:

```js
const flatArray = (acc, it) => [...acc, ...it];
```

### Example

```js
// thisArray = [[0, 1], [2, 3], [4, 5], [6, 7]];

thisArray.reduce(flatArray);

> [0, 1, 2, 3, 4, 5, 6, 7]
```

### `.flat()` (Potentailly better alternative)

This is something new to me that is similar to `.reduce(flatArray)` except you can go by a specified depth.

You can find more details on this on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```js
// thisArray = [[0, 1], [2, 3], [4, 5], [6, 7]];

thisArray.flat(); // default depth = 1

> [0, 1, 2, 3, 4, 5, 6, 7]
```

## `digitalRoot`

Find the digital root of a non-negative integer by using `digitalRoot`. The process continues until a single-digit number is reached.

### Example

```js
let val = 6765;

digitalRoot(val);
```

### Result

```js
6
```

## `trace()`

This will highlight with neon green in the console. Works either as `console.log` or `console.trace`.

### Example

```js
trace("console.log example");
trace("console.trace example", 1); // random value that is NOT undefined
```
![traceExample](https://raw.githubusercontent.com/jakewantulok/JS-Tricks/master/img/traceExample.png?raw=true)

## `stripDuplicateId()`

*Written in jQuery*

If the document has an issue where there are more than one of the same id, but the elements do not need to be removed, simply call this function.

## `killDuplicateText()`

*Written in jQuery*

This will check if the text contained are repeated in the same elements and will remove all except for the first element. This takes an array of strings. A safe way to retain elements with unique content even if targeted using the same class name or attribute.

### Example

```js
let arr = [
    'div.description',
    'span.product-price',
    'p.specifications'
    ];

killDuplicateText(arr);
```

## `killDuplicates()`

*Written in jQuery*

For obvious duplicates that need to be removed. This will remove all except for the first element. Uses an array of strings like `killDuplicateText()`. The difference being it will remove elements without checking anything first.

### Example

```js
let arr = [
    'h1',
    'form.subcribe',
    'nav'
    ];

killDuplicates(arr);
```

## `lzySrc`

Solution for blocking Shopify's lazyload.js to manulaly set a valid `src` attribute by replacing `{width}` in `data-src` with a chosen value from `data-widths` string perceived as an array.

### Example

#### Before

Check to see what is available in the `data-widths` attribute.

``` js
document.querySelectorAll('img.lazyload')[0].getAttribute('data-widths')
> "[360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]" // string precieved as an array

document.querySelectorAll('img.lazyload')[0].src
> "http://cdn.shopify.com/s/files/1/2345/6789/files/example_img_300x300.jpg?v=1553094531"
```

#### After

Target all `img` tags with the `lazyload` class and select a width from the array.

```js
lzySrc('img.lazyload', 3); // 3 = fourth from data-widths: 900

document.querySelectorAll('img.lazyload')[0].src
> "http://cdn.shopify.com/s/files/1/2345/6789/files/example_img_900x.jpg?v=1553094531"
```

## `storeEndpoint`

Using `storeEndpoint(url, name)` to request the enpoint and storing it with a unique name given along with the url. It requires the endpoint url, and the variable name you wish to give it.

This also stored the endpoint url as `nameEndpoint.src_url` so you can quickly associate where this endpoint was fetched from. This stored url remains outside of the fetched endpoint as well.

*In the function, you will see this stored in the `window`. If you would like to have all data bundled together as one object, I would recommend adding in something like `window.siteData`.*

### Example

```js
storeEndpoint(location.origin + location.pathname + '.json', 'product');

productEndpoint
> {...}

productEndpoint.src_url
> "https://www.example.com/products/exampleproduct.json"
```

## `regexStoreEndpoint`

`regexStoreEndpoint(url, name, regex)` is more situational and works much like `storeEndpoint` but will only fetch an endpoint if the page URL depending on a regex match. This is so it's not waiting on a promise that is expected to fail.

```js
regexStoreEndpoint(location.origin + location.pathname + '.json', 'inventory', /necklace/);

// Example: location.href ~ www.example.com/collections/necklaces
> fetched inventoryEndpoint

// Example: location.href ~ www.example.com/collections/watches
> did not fetch inventoryEndpoint

// No errors were made :)
```
