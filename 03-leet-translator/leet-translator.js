// //practice

// //#14 5/20/2021
// //#13 4/1 5mins
// //#12 2/9/2020 15mins
// //#11 2/8/2020
// //#10
// //#9 12/25/2019
// //#8
// //#7
// //#6  2019/12/10
// //#5
// //#4


// //#14 5/20/2021
function leetTranslator(norm){
  let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

  let dictionary = {};
  
  for(let i = 0; i < letters.length; i++){
    dictionary[letters[i]]= leetChars[i] 
  }
  
  let result = '';
  
  norm = norm.toLowerCase()
  
  for(let i = 0; i < norm.length; i++){
    result += dictionary[norm[i]]
  }
  console.log(result)
  return result
}


// //#13 NoSolution <3 so proud of myself
// const leetTranslator = (normal) => {
//   let leetStr = '';
//   let leetDict = {}
  
//   for(let i = 0 ;  i < letters.length; i++){
//     let letter = letters[i];
//     let leet = leetChars[i];
//     leetDict[letter] = leet
//   }
//   for(let i = 0; i < normal.length; i++){
//     let eachNorm = normal[i].toLowerCase();
//     leetStr += leetDict[eachNorm]
//   }
//   return leetStr
// }


// //#11 2/8/2020 2:35pm solved it without looking at the solution!
// const leetTranslator = (normStr) => {
//   let newStr = '';
//   let leetDic = {};
//   for(let i = 0 ; i < letters.length; i++ ){
//     let eachLet = letters[i]
//     let eachLeet = leetChars[i]
//     leetDic[eachLet] = eachLeet
//     }
//     for(let i = 0; i < normStr.length; i++){
//       let eachLet = normStr[i].toLowerCase();
//       newStr += leetDic[eachLet]
//     }
//   return newStr
// }

// let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// // #10
// const leetTranslator = (norStr) => {
//   let leetDict = {}
  
//   for(let i = 0; i < letters.length; i++){
//     let letter = letters[i]
//     let leetChar = leetChars[i]
    
//     leetDict[letter] = leetChar ///why does it have to be leetDict[letter] first then = leetChar??????
//   }
//   let returnStr = ''
  
//   for(let j = 0; j < norStr.length; j++){
//     let eachNorLetter = norStr[j].toLowerCase()
//     let leet = leetDict[eachNorLetter] 
//     returnStr += leet
//   }
//   return returnStr  
// }

// //#9
// const leetTranslator =  (norStr) => {

//   let leetDict = {}
  
//   for(let i = 0; i < letters.length; i++){
//     let eachLetter = letters[i];
//     let eachLeet = leetChars[i]; 
//     //console.log(eachLetter, eachLeet)
//     leetDict[eachLetter] = eachLeet; //obj[key]=val
//   }
//     let newStr = '';
//   for(let i = 0; i < norStr.length; i++){
//     let eachLetter = norStr[i].toLowerCase();
//     let eachStrLeet = leetDict[eachLetter]  //obj[key]=val
//     newStr+= eachStrLeet  
//   }
//   //  newStr+= leetChar   
//   return newStr;
//  // console.log(eachLetter)
// }

// leetTranslator('Fullstack')




// //#8
// const leetTranslator = (str) => {   
//   let leetDict = {}  ///codex // create a legend     //scope1 

//   //build the codex (e.g. {a: '@', b: '8'})
//   for(let i = 0; i< letters.length; i++){
//     let eachLetter = letters[i]
//     let eachLeet = leetChars[i];
    
//     leetDict[eachLetter] = eachLeet  
    
//   }
  
//   let returnedStr = '';
//   for(let i = 0; i < str.length; i++){    //scope 2 so 'i' can be used again. 
//     let eachLetter = str[i].toLowerCase();  //scope 2 so 'eachLetter' can be used again. 
//     let eachLeetStr = leetDict[eachLetter];
//     returnedStr += eachLeetStr;
//   }
//   return returnedStr
// }


// //#7 
// const leetTranslator = ( str ) => {
//   let leetDict = {};
//   for(let i = 0; i < letters.length; i++){
//     let eachLetter = letters[i]
//     let eachLeetChar = leetChars[i];
//     leetDict[eachLetter] = eachLeetChar;
//   }
//   let newStr = '';
//   for(let i = 0; i< str.length; i++){
//     let eachStrLetter = str[i].toLowerCase();
//     let leetChar = leetDict[eachStrLetter]
//     newStr += leetChar;
//   }
//    return newStr; 
// }


// //#6   2hr? and looked at the solution halfway. =.=
// const leetTranslator = ( str ) =>{

//   let leetDictionary = {}
  
//   for(let i = 0 ; i < letters.length; i++){
//     let letter = letters[i]
//     let leetChar = leetChars[i]
    
//     leetDictionary[letter] = leetChar 
//   }
//    let newStr = ''
//   for(let i  = 0; i < str.length; i++){
//     let eachStrLetter = str[i].toLowerCase();
//     let leetChar = leetDictionary[eachStrLetter] 
//     newStr += leetChar
//   }
//  return newStr
// }



// //#5
// const leetTranslator  = (original) =>{
//   let leetDictionary = {}
  
//   for(let i = 0; i < letters.length; i++ ) {
//     let eachLetter  = letters[i];
//     let eachLeet  = leetChars[i];
    
//     leetDictionary[eachLetter] = eachLeet;   
//   }
//   let returnedStr = '';
//   for(let i = 0 ; i < original.length; i++ ) {
//     let eachOriginal = original[i].toLowerCase();
//     let translatedLeet = leetDictionary[eachOriginal]
  
//     returnedStr += translatedLeet;   
//   }
//   return returnedStr;
// }



// //#4 3:58-4:28 20mins (got distracted looking at salary of software engineer in different cities)
// const leetTranslator = (aStr) =>{
//     let leetDict = {}
    
//     for(let i = 0; i < letters.length; i++){
//       let eachLet = letters[i];
//       let eachLeet = leetChars[i];
      
//       leetDict[eachLet] = eachLeet;
//     }
//     let reStr = '';
    
//     for(let i = 0; i < aStr.length; i++) {
//       let eachStr = aStr[i].toLowerCase();
      
//       let eachStrLeet = leetDict[eachStr];
//       reStr += eachStrLeet;
//     }
//     return reStr;
//   }
  

// //#3 3:52-3:58 6mins
// const leetTranslator = (originalStr) => {
//     let leetDictionary = {};
    
//     for(let i =0; i < letters.length; i++ ) {
//       let eachLetter  = letters[i];
//       let eachLeet = leetChars[i];
      
//       leetDictionary[eachLetter] = eachLeet;
//     }
    
//     let returnedStr = '';
    
//     for(let i = 0; i < originalStr.length; i++){
//       let eachOriginalStr = originalStr[i].toLowerCase();
      
//       let specificLeet = leetDictionary[eachOriginalStr]
//       returnedStr += specificLeet    
//     }
//     return returnedStr;
//   }
  


// //#2 3:00-3:52
// const leetTranslator = (originalStr) => {
//     let leetDictionary = {}; 
    
//     for(let i = 0; i <letters.length; i++ ) {
//       let eachLetter = letters[i];
//       let eachLeetChar = leetChars[i];
   
//       leetDictionary[eachLetter] = eachLeetChar;
//     }
//       let returnedStr ='';
//       for(let i = 0 ; i < originalStr.length; i++){
//         let eachOriginal = originalStr[i].toLowerCase();
//         let specificLeet = leetDictionary[eachOriginal] 
//         returnedStr += specificLeet;
//       }
//     return returnedStr;
//   }



// //#1 2:00-3:00 my comment. watched solution video.
// const leetTranslator = ( originalStr ) => {
//     let leetDictionary = {};  //leet dictionary is object
//    for(let i = 0; i < letters.length; i++){ // loop it the length of letter times. 
//      let eachLetter  = letters[i]; //each Letter
//      let eachLeetChar = leetChars[i]; //each Leet Character

//      leetDictionary[eachLetter] = eachLeetChar; //object, key/value pair
//    }
//    let leetString = ''; //this is the new leet string
//    for(let i = 0; i < originalStr.length; i++) { //times of looping, each letter in the originalStr 
//      let strEachLetter = originalStr[i]  // each original string letter 
//      .toLowerCase(); 
//      let leetChar = leetDictionary[strEachLetter]; //use the leet character/key/value;
//      leetString += leetChar;
//    }
//    return leetString;
//  }
 