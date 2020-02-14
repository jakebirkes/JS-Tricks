# Start Using TypeScript

## Generics

### Arrays

Here's an example function with a some arrays.

```js
const thisFunct = arr => arr.map(e => e + 1);

const strArr = ["1", "2", "3"];
const numArr = [1, 2, 3];
```

What if we only want this to work strictly with numbers? If we give `arr` the type of `number`, it will also define our `strArr` as a array of strings and `numArr` as an array of numbers.

```ts
const thisFunct = (arr: Array<number>) => arr.map((e) => e + 1);

// strArr and numArr have defined types!

thisFunct(strArr); // error! Expecting only numbers
```

What if we decide to have this work for both?

```ts
const thisFunct = (arr: Array<any>) => arr.map((e) => e + 1);

// the arrays types not defined!

thisFunct(strArr); // works though, but there's a better way
```

We could use `any`, however it does create an issue with defining our arrays unless we explicitly define them. But you can do this instead by giving a *generic* name which can be anything!

```ts
// a generic name, doesn't have to be "T"
const thisFunct = <T>(arr: Array<T>) => arr.map((e: any) => e + 1);

// the array types are NOW defined

thisFunct(strArr); // works! and array types are defined
```

If we want make sure a function will error if an invalid object doesn't meet the parameter requirements, we can specify a key and what its type should be.

```ts
const totalAmount = <T extends {checking: number, savings: number}>(obj: T) => {
    return {
        ...obj, // keeps everything in the object
        totalAmount: obj.checking + obj.savings // brings back a new prop with a value
    };
};
```

In an object, if we know that one type will vary we can give that key a generic value as well.

### Objects

```ts
interface dataStructure<T> {
    id: number,
    firstName: string,
    lastName: string,
    data: T // flexible
}

// what flavor is data going to be?
type dataStr = dataStructure<string>; // data type = string
type numStr = dataStructure<number>; // data type = number

// using the dataStructure interface and restricting data to string
const jakeWantulok: dataStr = {
    id: 1234,
    firstName: "Jake",
    lastName: "Wantulok",
    data: "Animal Lover" // only valid if it's a string!
}
```
