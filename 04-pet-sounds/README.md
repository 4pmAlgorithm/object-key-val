### Pet Sounds

Write a function `petSounds` that takes an animal name and a country name.

Using the globally-defined animalNoises array, `petSounds` should return a
sentence that explains which sound the animal makes in the given country.

```javascript
petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!

petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!






function petSounds(animal, country) {

    // loop through the animalNoises array
    for (let i = 0; i < animalNoises.length; i++) {
  
      // store each animal object in a variable
      let animalObject = animalNoises[i];
  
      // if the animal is a key in that animal object...
      if (animal in animalObject) {
        // ... we're looking at the right object for this animal!
  
        // store the object with the countries and sounds for this animal in a variable
        let countrySounds = animalObject[animal];
  
        // store the specific sound we're looking for in a variable
        let sound = countrySounds[country];
  
        // format the animal string correctly
        animal = animal[0].toUpperCase() + animal.slice(1) + 's';
  
        // return the final string, concating all of the pieces together
        return animal + ' in ' + country + ' say ' + sound;
      }
    }
  }
  





  ///////solution
  function petSounds(animal, country) {

  // loop through the animalNoises array
  for (let i = 0; i < animalNoises.length; i++) {

    // store each animal object in a variable
    let animalObject = animalNoises[i];

    // if the animal is a key in that animal object...
    if (animal in animalObject) {
      // ... we're looking at the right object for this animal!

      // store the object with the countries and sounds for this animal in a variable
      let countrySounds = animalObject[animal];

      // store the specific sound we're looking for in a variable
      let sound = countrySounds[country];

      // format the animal string correctly
      animal = animal[0].toUpperCase() + animal.slice(1) + 's';

      // return the final string, concating all of the pieces together
      return animal + ' in ' + country + ' say ' + sound;
    }
  }
}

// alternative solution using ES6 string interpolation
function petSounds2(animal, country) {
  for (let i = 0; i < animalNoises.length; i++) {
    let animalObject = animalNoises[i];

    if (animal in animalObject) {
      let countrySounds = animalObject[animal];
      let sound = countrySounds[country];

      animal = animal[0].toUpperCase() + animal.slice(1);

      return `${animal}s in ${country} say ${sound}`;
    }
  }
}