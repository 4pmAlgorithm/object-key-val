//#4 3/12/2020
//#3
//#2
//#1
// YOUR CODE BELOW
//dogBreeder 4:30-5:00 30mins




//#5 5/20/2021 
function dogBreeder (name = "Steve", age=0){

    if(typeof(name)==="number"){
    age = name
    name = "Steve"
  }
  
  let obj = {}
  obj['name'] = name
  obj['age']=age
  
  return obj
}

//#4 3/12/2020
const dogBreeder = (name, age) => {
  let nameAgeObj = {}
  
  if(typeof name === 'number'){
    age = name
    name = 'Steve'
  }
    if(age === undefined){
    age = 0
  }
  if(name === undefined){
    name ='Steve'
  }
  nameAgeObj['name'] = name
  nameAgeObj['age'] = age
  console.log(nameAgeObj)
  return nameAgeObj
}


// 12/27/2019   10:58pm
const dogBreeder = (name='Steve', age=0)=> {
  let returnObj = {}
  
  if(typeof name === 'number'){
    age = name
    name = 'Steve'
  }
  
  returnObj['name'] = name
  returnObj['age'] = age
  
  return returnObj;
  console.log(returnObj)
}



//#2 4:42-4:53
const dogBreeder = (name = 'Steve', age = 0) => {

    if(typeof name === 'number'){
      age = name;
      name  = 'Steve'
     
    }
  
    let dogObj = {
      name : name,
      age: age
    }
  
  return dogObj
  }
  




//#1 4:30-4:42 12mins
const dogBreeder = (name = 'Steve', age = 0) => {

    if(typeof name === 'number') {
    age = name;
    name = 'Steve'
  }
  
    let dogBreObj = {};
  
    dogBreObj['name'] = name;
    dogBreObj['age'] = age;
    
    return dogBreObj;
  }