## Objects

1. Run testem from this directory.
2. Copy and paste the url into a browser.
3. For each question, read the README, and then write your code in the .js
   file in each directory.
4. Save your work to update the tests.



## steps
1. cd to correct directory
2. npm install
3. npm test



## check if the key/values pair exist in the obj
```js
obj.hasOwnProperty(key)
```



## get the values of the objects
* 1: es3
```js
for( let key in obj){
   return obj[key]
}
```

* 2: ES5

```js
let keys = Object.keys(obj1)

Object.keys(obj1).forEach(function (key) {
   let val = obj1[key]
})
```

* 3: ES

```js
for( const key of Object.keys(obj1)){
   const val = obj1[key]
}
```

* 4: ES7
```js

const values = Object.values(obj);

for( const value of Object.values(obj1)){
   return vale
}


```

https://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key



## How to turn STR into an array 
string.split("")

"hello" => [ 'h', 'e', 'l', 'l', 'o' ]