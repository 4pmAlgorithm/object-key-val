
//#7 3/4/22 3:55pm - 4:01pm
//#6 03/03/2022 5:15pm - 5:30pm :-( looked at the solution..........
//#4 3/12/2020
//#3
//#2
//#1
// YOUR CODE BELOW
//dogBreeder 4:30-5:00 30mins


const dogBreeder = (name = "Steve", age = 0) => {
    let obj1 = {}

    if(age === "undefined"){
      age = 0
    }

    if(typeof name === "number"){
      age = name
      name = "Steve"
    }
    obj1.name = name;
    obj1.age = age;
  
  console.log(obj1)
  return obj1
}

dogBreeder("Steve")

//#6 03/03/2022 5:15pm - 5:30pm :-( looked at the solution..........
// const dogBreeder = (name = "Steve", age = 0) => {
//   let obj1 = {};

//   if(age === undefined){
//     obj1["name"] = name;
//     obj1["age"] = 0;
//   }
//   else if(typeof(name)  === "number" || age === undefined){
//     obj1["name"] = "Steve";
//     obj1["age"] = name;
    
//   }else{
//     obj1["name"] = name;
//     obj1["age"] = age || 0;
//   }
//   console.log(obj1)
//   return obj1
// }

// dogBreeder(15) 

// //#5 5/20/2021 
// function dogBreeder (name = "Steve", age=0){

//     if(typeof(name)==="number"){
//     age = name
//     name = "Steve"
//   }
  
//   let obj = {}
//   obj['name'] = name
//   obj['age']=age
  
//   return obj
// }

// //#4 3/12/2020
// const dogBreeder = (name, age) => {
//   let nameAgeObj = {}
  
//   if(typeof name === 'number'){
//     age = name
//     name = 'Steve'
//   }
//     if(age === undefined){
//     age = 0
//   }
//   if(name === undefined){
//     name ='Steve'
//   }
//   nameAgeObj['name'] = name
//   nameAgeObj['age'] = age
//   console.log(nameAgeObj)
//   return nameAgeObj
// }


// // 12/27/2019   10:58pm
// const dogBreeder = (name='Steve', age=0)=> {
//   let returnObj = {}
  
//   if(typeof name === 'number'){
//     age = name
//     name = 'Steve'
//   }
  
//   returnObj['name'] = name
//   returnObj['age'] = age
  
//   return returnObj;
//   console.log(returnObj)
// }



// //#2 4:42-4:53
// const dogBreeder = (name = 'Steve', age = 0) => {

//     if(typeof name === 'number'){
//       age = name;
//       name  = 'Steve'
     
//     }
  
//     let dogObj = {
//       name : name,
//       age: age
//     }
  
//   return dogObj
//   }
  




// //#1 4:30-4:42 12mins
// const dogBreeder = (name = 'Steve', age = 0) => {

//     if(typeof name === 'number') {
//     age = name;
//     name = 'Steve'
//   }
  
//     let dogBreObj = {};
  
//     dogBreObj['name'] = name;
//     dogBreObj['age'] = age;
    
//     return dogBreObj;
//   }