# JS-Tricks

## groupArray

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