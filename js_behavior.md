# JavaScript Behavior

## Adding Strings & Numbers

JavaScript isn't the most reliable when it comes to some operations. 

### Example

`
"11" +  11
`

We would hope that this equals to `22`, but this is not the case. 

`Result: "1111"`

Instead of performing an numeric operation, JS will disregard the different data types of these two operands, and treats this as a concatenation of two strings.

Interesting enough, we do not see this issue when we subtract.

`"11" - 11`

As you can see we get exactly what we need.

`Result: 0`

### Solution: Subtract first

All you need to do is subtract `1` from the string `"11"` and add `1` to retain its value!

`Result: 11` It's no longer a string!

So...

```js
"11" - 1 + 1 + 11

= 22
```

One thing to note, however, you must subtract by `1` before adding by `1` or else you will once again concatenate operands and create another issue rather than solving one.

## Decimals

JavaScript isn't good with decimals either. 

`150.90 * 6`

You would hope the answer would come to `905.40`. 
However...

Result: `905.4000000000001`

## Solution: Whole Numbers

Convert the number to a whole number and convert it back to its true output.

```js
150.9 * 100 * 6 /100
= 905.4
```