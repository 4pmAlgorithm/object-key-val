### Frequency Analysis

Define a function `frequencyAnalysis` that accepts a string of lower-case
letters.

`frequencyAnalysis` should return an object containing the count for each letter
in the string.























SOLUTION
```javascript
frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
```
//////////////////solution
```js
function frequencyAnalysis(string) {
  let charFrequencies = {};

  // loop through every character in the string
  for (let i = 0; i < string.length; i++) {

    // store the current character in a variable
    let char = string[i];

    // if the character hasn't been added to the object yet...
    if (!charFrequencies[char]) {

      // ...add it to the object now, starting the count at 1
      charFrequencies[char] = 1;
    }
    else {

      // otherwise, increment the count by one for that character
      charFrequencies[char]++;
    }
  }

  // return the object after the for loop
  return charFrequencies;
}