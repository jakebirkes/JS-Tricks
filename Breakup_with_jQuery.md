# Breakup With jQuery

## Resources

⭐ [You Don't Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery)

⭐ [Moving From jQuery to Vanilla JavaScript](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/)

## `$('')`

One conversation I had with someone made the argument jQuery is more "convenient" and brought up how to select an element. Well yes, that is more convenient than writing `document.querySelectorAll()` constantly, but do you know what you can do?

```js
function $(selector, context) {
    return (context || document).querySelectorAll(selector);
}
```

### Examples

```js
 // examples that look like jQuery, but isn't:
 $('input[name*="form"]') // list of all input with name="" containing "form"
 $('div.section')[0] // first element with class name
 $('#target') // the element with the id

```

There you have it, no plugin neccessary. What's great is that you can still select using class name, attribute or id. What you can do with this that you can't do with jQuery is go by index. No need for `:first-child` when you can write `$('')[0]`.

## Selector Options

- `querySelectorAll()` returns a list
- `querySelector()` the first selected
- `getElementsByClassname()` all elements with the same class name. (Can also select by index.)
- `getElementById()` select element with id

## `.each()`

Vanilla js answer: `.forEach()`.

```js
$('div').forEach((el) => {console.log('a whole new world')}); // done in one line using vanilla js
```

## Attributes

This is something that I came across and was actually the first time I wondered why we're still using jQuery.

```js
// jQuery ~ not reliable!
$(‘button’).attr(‘disabled, ‘true’);

// vanilla js ~ will work!
document.getElementsByTagName('button').disabled = true
```
