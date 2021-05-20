### Dog Breeder

Define a function, `dogBreeder`, that accepts up to two optional arguments:
  1. name (string)
  2. age (number)

`dogBreeder` should return an object that represents a new dog! If the user
doesn't define a name, assume the dog's name is Steve. If the user doesn't
define the dog's age, assume the dog's age is 0.

```javascript
dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

dogBreeder(15)    // => {name:'Steve', age: 15}
```
/////////////////solution
```js
function dogBreeder(name, age) {

  // if the user didn't provide a second argument...
  if (age === undefined) {

    // ...check to see if the user inputted the age as the first argument
    if (typeof name === 'number') {

      // if the first argument is the age, assign that value to the age parameter
      age = name;

      // set name to null, since we don't know what the name is
      name = null;
    }

    // otherwise, use the default value for age
    else {
      age = 0;
    }
  }

  // if we don't have a name yet...
  if (!name) {

    // ...use the default name here
    name = 'Steve';
  }

  let newDog =  {
    name: name,
    age: age
  };

  return newDog;
}

// alternative solution using ES6 default parameters

function dogBreeder(name='Steve', age=0) {
  if (typeof name === 'number') {
    age = name;
    name = 'Steve'
  }

  let newDog =  {
    name: name,
    age: age
  };

  return newDog;
}