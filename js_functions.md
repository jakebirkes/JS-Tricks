# Functions

## fibSeq()

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

## `groupArray()`

You can nest arrays in one by any size you need using `groupArray(array, groupSize)`.

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

## digitalRoot()

Find the digital root of a non-negative integer by using `digitalRoot()`. The process continues until a single-digit number is reached.

### Huh?

For example, let's take the number 6765. If a number is greater than or equal to 10, we split the number by its digits and add them together. We will continue this process until it's less than 10:

Is 6765 greater than or equal to 10?

Yes, split then add!
[6, 7, 6, 5], 6 + 7 + 6 + 5 = 24

Is 24 greater than or equal to 10?

Yes, split then add!
[2, 4], 2 + 4 = 6

Is 6 greater than or equal to 10?

No!
Therefore, 6 is the Digital Root of 6765!

### Example

```js
let val = 6765;

digitalRoot(val);
```

### Result

```js
6
```

## lazySrc()

Solution for Shopify's lazyload.js will create a new `src` attribute by replacing '{width}' in `data-src` with a chosen value from `data-widths` array using `lazySrc([obj], [num])`.

*Currently written in jQuery*

### Example

``` js
let target = $(`<img
                class="lazyload"
                data-src="//cdn.shopify.com/s/files/path/to/example-{width}px.jpg"
                data-widths="[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]">
            `);

lazySrc(target, 3); // 3 = 1080

console.log(target.attr('src'));
```

### Result

```js
"//cdn.shopify.com/s/files/path/to/example-1080px.jpg"
```

### fetchEndpoint() & fetchMalformedEndpoint()

Using `fetchEndpoint(endpoint, name)` to request the enpoint and storing it with a unique name given along with the url. It requires the endpoint url, and the variable name you wish to give it. Dealing with Shopify's REST API, fetching JSON isn't always succesful due to how a particular JSON endpoint is structured ~ give `fetchMalformedEndpoint(endpoint, name)` a try if the first one fails.

This also stored the endpoint url as `nameEndpoint.src_url` so you can quickly associate where this endpoint was fetched from. This stored url remains outside of the fetched endpoint as well.

*In the function, you will see this stored in the `window`. If you would like to have all data bundled together as one object, I would recommend adding in something like `window.siteData`.*

### Example

```js
fetchEndpoint(location.origin + location.pathname + '.json', 'product');
fetchMalformedEndpoint(location.origin + location.pathname + '.js', 'collection');

productEndpoint
> {...}

productEndpoint.src_url
> "https://www.example.com/products/exampleproduct.json"

collectionEndpoint
> {...}

collectionEndpoint.src_url
> "https://www.example.com/collection/example-products.js"
```

### regexFetchEndpoint()

`regexFetchEndpoint(endpoint, name, regex)` is more situational and works much like `fetchEndpoint()` and `fetchMalformedEndpoint()` but will only fetch an endpoint if the page URL depending on a regex match. This is so it's not waiting on a promise that is expected to fail.

```js
regexFetchEndpoint(location.origin + location.pathname + '.json', 'inventory', /necklace/);

// Example: location.href ~ www.example.com/collections/necklaces
> fetched inventoryEndpoint

// Example: location.href ~ www.example.com/collections/watches
> did not fetch inventoryEndpoint

// No errors were made :)
```
