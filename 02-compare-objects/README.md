### Compare Objects

Define a function, `compareObjects`, that accepts two objects as arguments.

`compareObjects` should return true if both objects have exactly the same
key/value pairs. Otherwise, `compareObjects` should return false. Assume the
objects are not nested.

```javascript
compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
```
//////solution
```js
function compareObjects(obj1, obj2) {

  // loop through the keys in obj1
  for (let key in obj1) {

    // if obj1 and obj2 have different values for any key...
    if (obj1[key] !== obj2[key]) {

      // ...immediately return false
      return false;
    }
  }

  // repeat for obj2
  for (let key in obj2) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  // if we never found a mismatched key/value pair, return true
  return true;
}