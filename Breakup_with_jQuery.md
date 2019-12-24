# Breakup with jQuery

## `$()`

A person I spoke with made the argument jQuery is more "convenient" and brought up how to select an element. Well yes, that is more convenient than writing `document.querySelectorAll()` constantly, but do you know what you can do?

```js
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}
```

There you have it, no plugin neccessary. What's great is that you can still select using class name, attribute or id. What you can do with this that you can't do with jQuery is go by index. No need for `:first-child` when you can write `$('')[0]`.

## Selector Options

- `querySelectorAll()` returns a list
- `querySelector()` the first selected
- `getElementsByClassname()` all elements with the same class name. (Can also select by index.)
- `getElementById()` select element with id

## `.each()`

We have `.forEach()` now. You can start using `Array.from()` to acheive the same thing.

```js
Array.from($('div')).forEach((el) => {console.log('hello')}); // done in one line using vanilla js
```

## Attributes

This is something that I came across and was actually the first time I wondered why we're still using jQuery.

```js
// jQuery ~ not reliable!
$(‘button’).attr(‘disabled, ‘true’);

// vanilla js ~ will work!
document.getElementsByTagName("target").disabled = true
```
