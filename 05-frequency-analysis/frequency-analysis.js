
//#11 3/4/22 3:51 - 3:54pm
//#10 03/03/2022 4:55PM - 5:11PM

//  #8 12/26/2019
//  #7  12/25/2019
//  #6  12/25/2019
//  #5  12/25/2019

function frequencyAnalysis(str){
  let obj = {}
  for(let i =0; i<str.length; i++){
    if(!obj[str[i]]){
      obj[str[i]] = 1
    }else{
      obj[str[i]] ++
    }
  }
  console.log(obj)
  return obj
}
frequencyAnalysis("hello world all about love")



//#10 03/03/2022 4:55PM
// const frequencyAnalysis = (str) => {
//   let obj1 = {}
//   for (let i = 0;  i < str.length; i++){
//     if(!obj1[str[i]]){
//       obj1[str[i]] = 1
//     } else{
//       obj1[str[i]] += 1
//     }
//     //console.log(obj1)
//   }
//   //console.log(obj1)
//   return obj1
// }

//frequencyAnalysis("hello world all about love")




// //#9
// const frequencyAnalysis = (lowerLet) => {
//   let countObj = {}
//   //let count = 0
  
//   for(let i = 0; i < lowerLet.length; i++){
//     let eachLetKey = lowerLet[i]
//     if(!countObj[eachLetKey]){  ///if it hasn't been added to the object yet, add one
//       countObj[eachLetKey]=1
//     }else{
//     countObj[eachLetKey]++
//     }
//       console.log(countObj)
//   }
//   return countObj
// }

// // YOUR CODE BELOW
// // hint: obj[key] = val

// //#8 12/26/2019
// const frequencyAnalysis = (str) => { 
//   let analizedObj = {}

//   for(let i = 0; i < str.length; i++){
//     let eachLet = str[i];
//     if(!analizedObj[eachLet]){
//       analizedObj[eachLet] = 1;
//     }else {
//       analizedObj[eachLet]++
//     }
//   }
//   return analizedObj  
// }



// //08:05pm-08:11pm  12/25/2019
// //#7
// const frequencyAnalysis = (str) => {
//   let analizedObj = {};
//   for(let i= 0; i <str.length; i++) {
//     let eachStr = str[i]; //obj[key] = val
//     //value = analizedObj[eachStr] //= value; // don't need this like leet translator 
//     if(!analizedObj[eachStr]){
//       analizedObj[eachStr]=1;
//     }else{
//       analizedObj[eachStr]++
//     }
//   }
//   return analizedObj
// }
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}


// //08:00-08:05
// //#6
// // YOUR CODE BELOW
// const frequencyAnalysis = (str) => {
//   let analizedObj = {};
//   for(let i = 0; i <str.length; i++) {
//     let eachLetter = str[i];
//     if(!analizedObj[eachLetter]){
//       analizedObj[eachLetter]=1
//     }else{
//       analizedObj[eachLetter]++
//     }
//   }
// return analizedObj;
// }




// //#5
// const frequencyAnalysis  = (lowerCaseStr) =>{  
//   let returnedObj = {};
//   let count = 0;
//   for(let i = 0; i < lowerCaseStr.length; i++){
//     let eachLetter = lowerCaseStr[i]; 
//    if(!returnedObj[eachLetter]){  //if the character hasn't been added to the object yet, return 1.
//      let count = 1
//    } else {
//      count++
//      //returnedObj[eachLetter]++
//    }
    
//   }
//   return returnedObj;
// }

// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}



// //#4
// const frequencyAnalysis  = (lowerCaseStr) =>{  
//   let returnedObj = {};
//   let count = 0;
//   for(let i = 0; i < lowerCaseStr.length; i++){
//     let eachLetter = lowerCaseStr[i];
//     if(!returnedObj[eachLetter]){
//       returnedObj[eachLetter] = 1
//     }else{
//       returnedObj[eachLetter] ++
//     }
//   }
//   return returnedObj;
// }


// //#3  4:26-4:28 
// const frequencyAnalysis = (aStr) => {
//     let freqDict = {}
  
//     for(let i=0; i < aStr.length; i++){
//       let eachChar = aStr[i]
//       if(freqDict[eachChar]){
//         freqDict[eachChar] += 1
//       } else {
//         freqDict[eachChar] = 1;
//       }
//     }
//     return freqDict
//   }

// //#2 4:14-4:26
// const frequencyAnalysis  = (aStr) => {
//     let freqDict = {}
  
//     for(let i = 0; i < aStr.length; i++) {
//       let eachChar = aStr[i];
  
//       if(freqDict[eachChar]){
//         freqDict[eachChar] += 1;
//       } else {
//         freqDict[eachChar] = 1;
//       }
  
//     }
//   return freqDict;
  
//   }
  


// //#1 4:00-4:14
// const frequencyAnalysis = (aStr) => {

//     let frequencyDictionaryObj = {};
  
//   for(let i = 0 ; i < aStr.length; i++){
//     let eachChar = aStr[i];
  
//   if(frequencyDictionaryObj[eachChar]) {
//     frequencyDictionaryObj[eachChar] += 1;
//   } else {
//     frequencyDictionaryObj[eachChar] = 1;
//   }
//     // if(frequencyDictionaryObj[eachChar]) { //if the char is already in the dictionary, add one
//     //   frequencyDictionaryObj[eachChar] += 1;
//     // }
//     // else {
//     //   frequencyDictionaryObj[eachChar] = 1;  //otherwise, it's one 
//     // }
//   }
//     return frequencyDictionaryObj; //
//   }
  
//   console.log(frequencyAnalysis('abca')); // => {a: 2, b: 1, c: 1})