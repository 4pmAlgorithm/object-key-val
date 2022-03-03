

//#16 3/03/2022 4:30pm-4:53pm
//#15 5/20/2021
//#14 5/20/2021
//#13 4/01 11:14pm-11:49pm
//#12 3/12
//#11 2/9/2020 2:28-2:32 4mins
//#10 2/9/2020 -11:45 looked at the solution
//#9 02/08/2020 -3:28pm
//#8



let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];


//#16 3/03/2022 4:30pm-

function petSounds (animalName, countryName) {
  let str = ""
  animalNoises.forEach( eachAniObj => {
    if(animalName === Object.keys(eachAniObj)[0]){
      
      console.log(`${animalName.charAt(0).toUpperCase()}${animalName.slice(1)}s in ${countryName} say ${eachAniObj[animalName][countryName]}`)
      str += `${animalName.charAt(0).toUpperCase()}${animalName.slice(1)}s in ${countryName} say ${eachAniObj[animalName][countryName]}`
    }
  })
  return str
  // for(let i=0; i<animalNoises.length; i++){
  //   console.log(Object.keys(animalNoises[i]))
  // }
}

petSounds("dog", "Iceland")


//#15 5/20/2021

// function petSounds(animal, country){
//   for(let i = 0; i < animalNoises.length; i++){
    
//     let animalObj = animalNoises[i]
   
//     if(animal in animalObj){  // if the animal is a key in that animal object...
//       let countryObj = animalObj[animal]
//       let sound = countryObj[country]
      
//       animal = animal[0].toUpperCase() + animal.slice(1)
      
//       return `${animal}s in ${country} say ${sound}` 
      
//     }
//   }
// }

// //#14 5/20/2021 but didn't pass
// function petSounds(name, country){
  
//   let sentence = ""
  
//   animalNoises.map((eachAnimal) => 
//            if(name in animalNoises){
//            sentence += `${name}s in ${country} say ${eachAnimal[name][country]}`
//   })
//   console.log(sentence)
//   return sentence
// }



// //#13
// // YOUR CODE BELOW
// //11:14pm-11:49pm
// const petSounds = (animal, country) => {
//   let sentence = '';
  
//   for(let i = 0 ; i < animalNoises.length; i++){
//     let eachAnimal = animalNoises[i];
    
//     if(animal in eachAnimal){  
//       let countryObj = eachAnimal[animal];
//       let animalSound = countryObj[country];
//          //console.log(animal)
//          sentence = `${animal.slice(0,1).toUpperCase()}${animal.slice(1)}s in ${country} say ${animalSound}`
//      }
//      }
//   return sentence
// }


// //#12
// const petSounds = (animal, country) => {
//   let sentence = '';
 
// for(let i = 0 ;  i < animalNoises.length; i++){ 
//  let animalNoise = animalNoises[i]
// console.log(animalNoise.animal)
//  if(animal in animalNoise){ //////important
   
//   sentence += `${animal.slice(0,1).toUpperCase()}${animal.slice(1)}s in ${country} say ${animalNoise[animal][country]}`
// }
// }
//   return sentence
// }

// //#11
// const petSounds = (name, country) => {
//   for(let i = 0 ; i < animalNoises.length; i++){
//     let eachAnimal = animalNoises[i];
//     if(name in eachAnimal){
//     return `${name[0].toUpperCase()}${name.slice(1)}s in ${country} say ${eachAnimal[name][country]}`
//   }
//   }
//   }
  

// // YOUR CODE BELOW

// //hint
// //just figure out the animal noise ('Cluck cluck') and use name and country from the problem given. 

// //#8  12/26/2019
// function petSounds(name, country){
//   for(let i= 0; i < animalNoises.length; i++){
//     let eachAnimal = animalNoises[i];
//     if(name in eachAnimal){
//      return `${name[0].toUpperCase()}${name.slice(1)}s in ${country} say ${eachAnimal[name][country]}`
//     }
//   }
// }

// //#7 12/25/2019
// const petSounds = (name, country) => {
//   for(let i = 0; i < animalNoises.length; i++ ){
//     let eachAnimal = animalNoises[i];

//     if(name in eachAnimal){
//       let animalName = eachAnimal[name];
//       let animalSound = animalName[country];
      
//        return `${name[0].toUpperCase()}${name.slice(1)}s in ${country} say ${animalSound}`
//        //Dogs in Iceland say Voff voff!
//     }
//   }
// }



// //#6
// let animalNoises = [
//   { 'dog': {
//     'America' : 'Woof! Woof!',
//     'Germany' : 'Wau Wau!',
//     'England' : 'Bow wow!',
//     'Uruguay' : 'Jua jua!',
//     'Afrikaans' : 'Blaf!',
//     'Korea' : 'Mong mong!',
//     'Iceland' : 'Voff voff!',
//     'Albania' : 'Ham!',
//     'Algeria' : 'Ouaf ouaf!'
//     }
//   },
//   { 'cat': {
//     'America' : 'Meow',
//     'Germany' : 'Miauw!',
//     'England' : 'mew mew',
//     'Uruguay' : 'Miau Miau!',
//     'Afrikaans' : 'Purr',
//     'Korea' : 'Nyaong!',
//     'Iceland' : 'Kurnau!',
//     'Albania' : 'Miau',
//     'Algeria' : 'Miaou!'
//     }
//   },
//   { 'chicken':          //name
    
//       {                 //country Obj
//     'America' : 'Cluck cluck',          //noiseObj
//     'Germany' : 'tock tock tock',
//     'England' : 'Cluck Cluck',
//     'Uruguay' : 'gut gut gdak',
//     'Afrikaans' : 'kukeleku',
//     'Korea' : 'ko-ko-ko',
//     'Iceland' : 'Chuck-chuck!',
//     'Albania' : 'Kotkot',
//     'Algeria' : 'Cotcotcodet'
//     }
//   }
// ];

// // YOUR CODE BELOW
// const petSounds = (name, country) => {
//   for(let i = 0; i < animalNoises.length; i++){
//     let eachAnimal = animalNoises[i];
//     //console.log(eachAnimal)
//    if(name in eachAnimal){//to get to the noiseObj( 'Woof! Woof!') step#1
//      let countryObj = eachAnimal[name] //to get to the  noiseObj( 'Woof! Woof!')step#2
//      let noiseObj = countryObj[country] //to get to the  noiseObj( 'Woof! Woof!') step#3
// //     let sound = name[country]
//      return `${name[0].toUpperCase()}${name.slice(1)}s in ${country} say ${noiseObj}`
//    }
//   } 
// }




// //#5
// //2019/12/10 couldn't figure it out yet
// // YOUR CODE BELOW
// const petSounds = (animal, country) => {
// //  let returnedSentence = '';
//     let animalObject = {}
//   for(let i = 0; i < animal.length; i ++){
//     let eachAnimal = animal[i]
//     let countryNSound = animalObject[eachAnimal]  
//   }

//   return `${animal[0].toUpperCase()}${animal.slice(1)}s in ${country} say ${animalNoises[0][animal][country]}!`;

//   // for(let key in animalNoises){
//   //   let eachKey = animalNoises[key];
//   //   console.log(eachKey)
// }

// petSounds('chicken', 'Uruguay');
// //petSounds('dog', 'Korea')
// //'Dogs in Korea say Mong mong!'.


















// //#4  1:59-2:07   8mins
// const petSounds = (animal, country) => {
//   for(let i = 0 ; i < animalNoises.length; i++){
//     let animalObject = animalNoises[i];
    
//     if(animal in animalObject) {
//       let countryObject = animalObject[animal];
//       let noiseObject = countryObject[country];
//       animal = animal[0].toUpperCase() + animal.slice(1) + 's';
//       return animal + ' in ' + country + ' say ' + noiseObject   
//     }
//   }
// }



// //#3 1:52-1:59   7mins
// const petSounds  = ( animal, country) => {
//   for(let i = 0 ;  i < animalNoises.length; i++) {
//     let animalObject = animalNoises[i];

//     if(animal in animalObject) {
//       let countryObj = animalObject[animal];
//       let soundObj = countryObj[country];
//       animal = animal[0].toUpperCase() + animal.slice(1) + 's'
//        return `${animal} in ${country} say ${soundObj}!`
//     }
//   }
// }


// //#2 1:00-1:52  52mins
// const petSounds  = ( animal, country) => {
//   for(let i = 0 ; i < animalNoises.length; i++) {
//     let animalObject =  animalNoises[i];
  
//     if(animal in animalObject) {
//       let animalCountry = animalObject[animal]
//       let countryNoise = animalCountry[country]
//       animal = animal[0].toUpperCase() + animal.slice(1)
//       return animal + 's' + ' in ' + country + ' say ' + countryNoise
//     }
//   }
//   }


// //12:10
// //#1 guess but wrong.
// const petSounds  = ( animal, country) => {
//   let sentence = '';
  
  
//   let animalNoise = '';
//   animalNoises[animal] = country;
//   animalNoises[animal][country] = animalNoise;

//   sentence = `${animal}s in ${country} say ${animalNoise}`
  
//   return sentence
  
// } 
// //dogs in Iceland say 