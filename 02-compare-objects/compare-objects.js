// YOUR CODE BELOW 

//#12 3/2/2022
//#11 2/28/2022
//#10 5/20/2021 
//#9 02/29/2020 10mins
//#8 
//#7 11/19/2019 1:21-1:57  36mins


//#12
const compareObjects = (obj1, obj2) => {
  console.log(Object.values(obj2))
  if(Object.keys(obj1).length !== Object.keys(obj2)){
    console.log(false)
    return false
  }
  if(obj1[Object.keys(obj1)] !== obj2[Object.keys(obj1)]){
    console.log(false)
    return false
  }
  if(obj2[Object.keys(obj2)]!== obj1[Object.keys(obj2)]){
    console.log(false)
    return false
  }
  console.log(true)
  return true
}

compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })


//#11 2/28/2022
// const compareObjects = (arg1, arg2) => {
//   if(Object.keys(arg1).length !== Object.keys(arg2).length){
//     console.log(false)
//     return false
//   } if(Object.keys(arg1) !== Object.keys(arg2)){
//     console.log(false)
//     return false
//   } if(Object.keys(arg1) !== Object.keys(arg2)){
//     console.log(false)
//     return false
//   } if(Object.values(arg1) !== Object.values(arg2)){
//     console.log(false)
//     return false
//   }
  
//   return true;
// }


// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })



//#10 5/20/2021


// function compareObjects( obj1, obj2 ){
  
//   //compare value
//   for(key1 in obj1){
//     if(obj1[key1] !== obj2[key1]){
//       console.log(false)
//     }
//   }
//   for(key2 in obj2){
//     if(obj2[key2] !== obj1[key2]){
//       console.log(false)
//     }
//   }
//   console.log(true)
// }

// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })


//#8
// const compareObjects = (a,b) =>{
//   for(let keys in a){    ///loop all the values in a
//     if(a[keys] !== b[keys] ){
//       //console.log(a[keys])
//       return false    ///find all the false first 
//     }
//   }
//    for(let keys in b){    ///loop all the values in b
//      if(b[keys] !== a[keys]){
//        return false    ///find all the false first 
//      } 
//    }
//    return true    ///everything else is true 
//  }

//#7  12/23/2019
// YOUR CODE BELOW
// const compareObjects = (a,b) =>{
//   //#1 if the length of the each object are different return false
//   if(Object.keys(a).length !== Object.keys(b).length){
//     return false;
//   } 
  
//   //#2 loop each values in a and check with each values in b
//   for(let keys in a){
//     if(a[keys]!==b[keys]){
//       return false
//     }
//   }
  
//   //#3 loop each values in b and check with a values 
//   for(let keys in b){
//     if(b[keys]!== a[keys]){
//       return false
//     }
//   }
  
  //#4 otherwise return true
  //return true
//}

// //#6
// const compareObjects = (a,b) => {


//   if(Object.keys(a).length !== Object.keys(b)){  ///if the length of the objects are not the same, return false. 
//     return false
//   }


//   for(let key in a ){   ///looping object is 'SEARCHING' for the key name. Not looping how many times like array. 
//    if(a[key] !== b[key]){
//      //console.log(key)
//      return false
//    }
//  }
//  for(let key in b ){
//    if(a[key] !== b[key]){
//      //console.log(key)
//      return false
//    }
//  }
//    return true
// }

// compareObjects({ lame: 'zeke' }, { name: 'zeke', age: 12 }) // -> false

// //#5
// const compareObjects = (a,b) => {
//   if(Object.keys(a).length !== Object.keys(b)){
//     return false
//   }


//   for(let key in a ){
//    if(a[key] !== b[key]){
//      //console.log(key)
//      return false
//    }
//  }
//  for(let key in b ){
//    if(a[key] !== b[key]){
//      //console.log(key)
//      return false
//    }
//  }
//    return true
// }




// //#4 2019/12/10
// const compareObjects = (a,b) => {
//   for(let key in a ){
//    if(a[key] !== b[key]){
//      //console.log(key)
//      return false
//    }
//  }
//  for(let key in b ){
//    if(a[key] !== b[key]){
//      //console.log(key)
//      return false
//    }
//  }
//    return true
// }


// //#3 1:54-1:57
// const compareObjects = ( obj1, obj2 ) => {
//     for(let key in obj1) {
//       if(obj1[key] !== obj2[key]){
//         return false;
//       }
//     }
//     for(let key in obj2){
//       if(obj1[key] !== obj2[key]){
//         return false
//       }
//     }
//     return true;
//   }

// //#2 1:50-1:54  my comments!
// const compareObjects = (obj1, obj2) => {
//     for(let key in obj1 ){  //this is how you loop object ! 
//       if(obj1[key] !== obj2[key]){ 
//         return false;
//       }
//     }
//     for(let key in obj1 ){  //loop obj2 this time 
//       if(obj1[key] !== obj2[key]){
//         return false;
//       }
//     }
//     return true;
//   }
  

// // #1 1:21-1:50  29mins  solution
// const compareObjects = (obj1, obj2) => {
//   for(key in obj1){
//     if(obj1[key] !== obj2[key]){
//       return false;
//     }
//   }

//     for(key in obj2){
//     if(obj1[key] !== obj2[key]){
//       return false;
//     }
//   }
//   return true;
// }
