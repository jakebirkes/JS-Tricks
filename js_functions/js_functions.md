# Functions

## Commonly Known

### `fibSeq()`

[`fibSeq(num: <number>)`](fibSeq\fibSeq.js)

Fibonacci Sequence limited by length using `fibSeq(length)`.

```js
fibSeq(6); // only taking the first 6

> [1, 1, 2, 3, 5, 8]
```

## Working With Arrays

### `sumArr`, `subArr`, & `multArr`

To find the sum-total of sub-total of an array, as well as multiplying all items of array and finding the average. We do this by making use of `.reduce()` and the arrow `=>` function. You'll see it's the same basic line with different operators each corresponding to the variable name.

#### `sumArr`

```js
var sumArr = (acc, cur) => acc + cur;
```

``` js
let exArray = [1, 2, 3, 4, 5, 6];

exArray.reduce(sumArr);
> 21 // 1 + 2 + 3 + 4 + 5 + 6

let exArraytwo = [[0, 1], [2, 3], [4, 5]];
exArrayTwo[2].reduce(sumArr);
> 9 // 4 + 5
```

#### `subArr`

```js
var subArr = (acc, cur) => acc - cur;
```

``` js
let exArray = [1, 2, 3, 4];

exArray.reduce(subArr);
> -8 // 1 - 2 ...
```

#### `multArr`

```js
var multArr = (acc, cur) => acc * cur;
```

``` js
let exArr = [1, 2, 3, 4, 5, 6];

exArr.reduce(multArr);

> 720
```

#### Find the average easily with `sumArr`

~~Get the average of an array using `avgArr()`.~~

**There is a much simpler way of finding the average of an array. Just use `sumArr` as mentioned above and divide by `.length`:**

```js
let exArr = [1, 2, 3, 4, 5, 6];

exArr.reduce(sumArr) / exArr.length;

> 3.5
```

### `nestArr()`

`nestArr(arr: Array<number>)`

You can nest arrays in one by any size you need using `partition(arr, length)`.

```js

let thisArray = [0, 1, 2, 3, 4, 5, 6, 7];

partition(thisArray, 2); // grouping them in pairs

> [[0, 1], [2, 3], [4, 5], [6, 7]]
```

### `flatArr`

If you need to "flatten" these nested arrays back into one array. Use the following:

```js
var flatArr = (acc, it) => [...acc, ...it];
```

```js
let thisArray = [[0, 1], [2, 3], [4, 5], [6, 7]];

thisArray.reduce(flatArr);

> [0, 1, 2, 3, 4, 5, 6, 7]
```

### `.flat()`

*A potentially better alternative!*

This is something new to me that is similar to `.reduce(flatArr)` except you can go by a specified depth.

You can find more details on this on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```js
// thisArray = [[0, 1], [2, 3], [4, 5], [6, 7]];

thisArray.flat(); // default depth = 1

> [0, 1, 2, 3, 4, 5, 6, 7]
```

### `digRoot()`

`
digRoot(num: number)
`

Find the digital root of a non-negative integer by using `digRoot(num)`. The process continues until a single-digit number is reached.

```js
let val = 6765;
digRoot(val);

> 6
```

### `parseCombine()`

This is a unique situation for complex strings that need to split into an arrays. If a character meets the requirements of a regular expression then concatenate this character with the previous so they belong together.

```js
let test = "StXpPrAToR";
```

We want to get an array that looks like this where any lower case character belongs to the previous uppercase character:

```js
["St", "Xp", "Pr", "A", "To", "R"]
```

Here we store the outcome into a new variable and target any character that is lowercase.

```js
const testArr = parseCombine(test, /[a-z]/); // any lowercase match

// testArr = ["St", "Xp", "Pr", "A", "To", "R"];
```

## DOM Manipulation

### `stripNonUniqueIds()`

[`stripNonUniqueIds(arr: Array<string>)`](stripNonUniqueIds/stripNonUniqueIds.js)

If the document has an issue where there are more than one of the same id, but the elements do not need to be removed, simply call this function. Any element that has a non-unique id, the target string will be stored in an array which will later display in the console.

*There is a jQuery version available called [`_stripDuplicateIdsOLD.js`](stripNonUniqueIds/_stripDuplicateIdsOLD.js)*

```js
stripNonUniqueIds();
> "stripNonUniqueIds() stripped the following non-unique ids ~ elements retained:",
    ["#fetured-section","#productCard"]
```

### `killDuplicateContent()`

[`killDuplicateContent(arr: Array<string>)`](killDuplicateContent/killDuplicateContent.js)

This will check if the text contained are repeated in the same elements and will remove all except for the first element. This takes an array of strings. A safe way to retain elements with unique content even if targeted using the same class name or attribute. Any element that contains duplicate content, the target string will be stored in an array which will later display in the console.

*There is a jQuery version available called [`_killDuplicateContentOLD.js`](killDuplicateContent/_killDuplicateContentOLD.js)*

```js
let arr = [
    'div.description',
    'span.product-price',
    'p.specifications'
    ];

killDuplicateContent(arr);
> "killDuplicateContent() removed the following duplicate elements:",
    ["div.description", "span.product-price", "p.specifications"]
```

### `killDuplicates()`

[`killDuplicates(arr: Array<string>)`](killDuplicates/killDuplicates.js)

For obvious duplicates that need to be removed from the DOM. This will remove all except for the first element. Any duplicate that does exist, the target string will be stored in an array which will later display in the console.

*There is a jQuery version available called [`_killDuplicatesOLD.js`](killDuplicates/_killDuplicatesOLD.js)*

```js
let arr = [
    'h1',
    'form.subcribe',
    'nav'
    ];

killDuplicates(arr);

> "killDuplicates() removed the following duplicate elements:",
    ["h1", "form.subcribe", "nav"]
```

### `lzySrc()`

[`lzySrc(selector: string, dataWidth: number)`](lzySrc\lzySrc.js)

Solution when plugin is blocked that utilizes `src-set` for images. This will manually set a valid `src` attribute by replacing `{width}` in `data-src` with a chosen value from `data-widths` string perceived as an array. This function was specifically made for lazyload.js, so you might need to alter it for your own project.

Check to see what is available in the `data-widths` attribute.

``` js
document.querySelectorAll('img.lazyload')[0].getAttribute('data-widths')
> "[360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]" // array as a string

document.querySelectorAll('img.lazyload')[0].src
> "http://cdn.shopify.com/s/files/1/2345/6789/files/example_img_300x300.jpg?v=1553094531"
```

Target all `img` tags with the `lazyload` class and select a width from the array.

```js
lzySrc('img.lazyload', 3); // 3 = fourth from data-widths: 900

document.querySelectorAll('img.lazyload')[0].src
> "http://cdn.shopify.com/s/files/1/2345/6789/files/example_img_900x.jpg?v=1553094531"
```

## Fetching

### `storeEndpoint()`

Using `storeEndpoint(url, name, isJSON, requiresProxy)` to request the endpoint and storing it with a unique name given along with the url. It requires the endpoint url, and the variable name you wish to give it. There is also the option to fetch either a JSON response by setting it to true or raw text if false. To get around the CORs error issue, setting it to true will prepend "https://cors-anywhere.herokuapp.com/" to the url string.

This also stored the endpoint url as `nameEndpoint.src_url` so you can quickly associate where this endpoint was fetched from. This stored url remains outside of the fetched endpoint as well.

*In the function, you will see this stored in the `window`. If you would like to have all data bundled together as one object, I would recommend adding in something like `window.siteData`.*

```js
storeEndpoint(location.origin + location.pathname + '.json', 'product', true, false);

productEndpoint
> {...}

productEndpoint.src_url
> "https://www.example.com/products/exampleproduct.json"
```

### `regexStoreEndpoint()`

`regexStoreEndpoint(url, name, regex)` is more situational and works much like `storeEndpoint` but will only fetch an endpoint if the page URL depending on a regex match. This is so it's not waiting on a promise that is expected to fail.

```js
regexStoreEndpoint(location.origin + location.pathname + '.json', 'inventory', /necklace/);

// Example: location.href ~ www.example.com/collections/necklaces
> "regexStoreEndpoint(): url successfully matched /necklace/ & fetched inventoryEndpoint"

// Example: location.href ~ www.example.com/collections/watches
> "regexStoreEndpoint(): url did not match /necklace/"

// No errors were made
```

## Console

### `highlight()`

`highlight(msg)` or `highlight(msg, clr)`

This will highlight with neon green in the console. Or if you want a different color, simply add a rgb or hex value.

![highlightExample](https://raw.githubusercontent.com/jakewantulok/JS-Tricks/master/img/highlightExample.png?raw=true)

### `ampCSSBudget()`

***[AMP⚡](https://amp.dev/)***

Because AMP restricts pages to a [75k CSS Budget](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/?format=websites#add-styles-to-a-page) you can check in the console how close you are in reaching this limit by evaluating the number of characters used in `style[amp-custom]` and any inline styles. Depending on how much is used, it will highlight in green (<= 50%), yellow (<= 75%), or red (> 75%).

![highlightExample](https://raw.githubusercontent.com/jakewantulok/JS-Tricks/master/img/ampCssBudget.png?raw=true)

## Observers

### `watchThis()`

`watchThis(target, time)` time: 1000ms default

Don't you hate watching an element changes on you and you're struggling where to place that debugger? Use this simple Mutation Observer that pauses as soon as the change was made - which will help narrow things down.

![watchThisExample](https://raw.githubusercontent.com/jakewantulok/JS-Tricks/master/img/watchThis.png?raw=true)
