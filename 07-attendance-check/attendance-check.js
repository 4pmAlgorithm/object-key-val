//practice

//#8 5/28/2021
//#7 5/20/2021
//#6 4/7/2020 
//#5
//#4
//#3
//#2
//#1


/////solution //#5
// 1. create an empty array
// 2. for loop
// 3. store eachStudentObj in a variable
// 4. store name in a variable. only define the key name!!!! use Object.keys() method. 
// 5. store attendanceObjs (define value)
// 6. for loop  attendanceObj
// 7. store each attendance obj in a variable
// 8.  each attendance has one key, which is the name of a day of the week
// 9. if the dayName is the same as the day parameter...
// 10. Get only true or false; return all the values, true, true, false, false,......etc  eachAttendanceObjs[monday]
// 11 ...the student was present on that day!
// 12 return

let classRoom = [
  {
      "Marnie" : [
              {"Monday" : true},
              {"Tuesday" : true},
              {"Wednesday" : true},
              {"Thursday" : true},
              {"Friday" : true}
          ]
  },

//#8 5/28/2021
function attendanceCheck(day){
  let attendedName = []
  
  for(let i =0; i < classRoom.length; i++){
    let eachStudentObj = classRoom[i]
    
    for(let eachStudentName in eachStudentObj){     
      let stuDayArr = eachStudentObj[eachStudentName]
      console.log(stuDayArr)
      for(let i =0; i < stuDayArr.length; i++){
        let stuDayObj = stuDayArr[i]
        //console.log(stuDayObj)
        for(let date in stuDayObj){
           if(stuDayObj[date] === true && date === day){
          attendedName.push(eachStudentName)
          }
        }
      }
    }
  }
  return attendedName
}


//#7 5/20/2021
// YOUR CODE BELOW
function attendanceCheck (day){
  let result = []
  
  for(let i = 0; i < classRoom.length; i++){
    let studentObj = classRoom[i] 
    for( studentName in studentObj){
      let studentAttendance = studentObj[studentName]
        for(let i = 0; i < studentAttendance.length; i++){
         let eachDayObj = studentAttendance[i]
             for( dayName in eachDayObj ){
                 if(dayName === day && eachDayObj[dayName] === true)  
                   result.push(studentName)
                 }
            }
        } 
    }  
  }
  return result
}
//#6 4/7/2020 no solution
// YOUR CODE BELO
const attendanceCheck = (day) => {
  let newArr = [];
  for(let i = 0 ; i < classRoom.length; i++){
    let eachStudent = classRoom[i];
    let studentName = Object.keys(eachStudent)
    
    let days = eachStudent[studentName]
    for(let i = 0; i < days.length; i++){
      let eachDay = days[i]
      console.log('eachDay', eachDay)
      for(let keys in eachDay){
        let value = eachDay[keys]
        if(value === true){
          if(keys === day){
          console.log('trueDay', keys)
          newArr.push(studentName[0])
          }
        }
      }
    }
  console.log('days', days)
  console.log(studentName)
    }
  console.log('newArr', newArr)
  return newArr
}



//#5
const attendanceCheck = (day) => {
  let presentStudents = [];
  
  for(let i = 0; i < classRoom.length; i++){
    let eachStudentObj = classRoom[i]
  let studentName = Object.keys(eachStudentObj)[0]
let daysArr = eachStudentObj[studentName]
for(let j = 0 ; j < daysArr.length; j++){
  let eachDayObj = daysArr[j]
  
 let dayName = Object.keys(eachDayObj)[0]
if(dayName === day && eachDayObj[dayName] === true){
    presentStudents.push(studentName)
}
}
}
  return presentStudents;
}


//#4
// 01/05/2020 
const attendanceCheck = (day) => {
  let returnArr = [];
  
  for(let i = 0; i < classRoom.length; i++){
    let eachStudent = classRoom[i];
    let name  = Object.keys(eachStudent)[0]
    let days = eachStudent[name]

      for(let j = 0 ; j < days.length; j++){
        let eachDay = days[j];
        let dayName = Object.keys(eachDay)[0];

      //console.log(eachDay[dayName])

        if(dayName === day && eachDay[dayName] ){
          returnArr.push(name)
        }
        //console.log(dayName)
      }

    //console.log(days)
  }
  return returnArr
}










//#3
// 8:00pm-10:00pm 
const attendanceCheck= (day) => {
  let returnArr = [];

  for(let i = 0; i < classRoom.length; i++){
    let eachStudentObj = classRoom[i];
    let name = Object.keys(eachStudentObj)[0]
    let attendanceObjs = eachStudentObj[name];
    //console.log(attendanceObjs)
    for(let j = 0; j < attendanceObjs.length; j++){
      let eachAttendanceObjs = attendanceObjs[j]
      let monday = Object.keys(eachAttendanceObjs)[0]
      if(monday === day && eachAttendanceObjs[monday]){
        returnArr.push(name)
      }
    }
  }
  return returnArr
}



//12/26/2019
// YOUR CODE BELOW
const attendanceCheck = (dayStr) => {
  for(let i = 0; i< classRoom.length; i++){
      let eachStudent = classRoom[i];
    //eachStudent[Object.eachStudent()]
    console.log(eachStudent)
  }
}

attendanceCheck('Monday')






//#2 11:50-12:11 21mins

let classRoom = [
  { //studentObj
      "Marnie" ://studentName
            [ //attendanceDayObj
              {"Monday" : true}, //eachDay  //dayName
              {"Tuesday" : true},
              {"Wednesday" : true},
              {"Thursday" : true},
              {"Friday" : true}
          ]
  },
  {
      "Lena" : [
              {"Monday" : false},
              {"Tuesday" : false},
              {"Wednesday" : true},
              {"Thursday" : false},
              {"Friday" : true}
          ]
  },
  {
      "Shoshanna" : [
              {"Monday" : true},
              {"Tuesday" : true},
              {"Wednesday" : false},
              {"Thursday" : true},
              {"Friday" : false}
          ]
  },
  {
      "Jessa" : [
              {"Monday" : false},
              {"Tuesday" : false},
              {"Wednesday" : false},
              {"Thursday" : false},
              {"Friday" : true}
          ]
  }
];

// YOUR CODE BELOW

const attendanceCheck  = (day) => {

let presentStudent = []

for(let i = 0 ; i < classRoom.length; i++){
  let studentObj = classRoom[i];
  let studentName = Object.keys(studentObj)[0];
  let attendanceDayObj = studentObj[studentName]
    for(let j = 0; j < attendanceDayObj.length; j++) {
      let eachDay = attendanceDayObj[j];
      let dayName = Object.keys(eachDay)[0];
      if(dayName === day && eachDay[dayName]){
        presentStudent.push(studentName)
      }
    }
}
return presentStudent;
}













//#1
let classRoom = [
    { //studentObj = classRoom[0]
        "Marnie" : [ //studentName = Object.keys(studentObj)[0]
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    { //studentObj = classRoom[1]
        "Lena" : [ //studentName = Object.keys(studentObj)[0]
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    { //studentObj = classRoom[2]
        "Shoshanna" : [ //studentName = Object.keys(studentObj)[0]
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    { //studentObj = classRoom[3]
        "Jessa" :  //studentName = Object.keys(studentObj)[0]
                  [                   //attendanceObjs = studentObj[studentName];
                {//attendanceObj = attendanceObjs[0]
                  "Monday" : false //dayName = Object.keys(attendanceObj)[0]
                  },  
                {//attendanceObj = attendanceObjs[1]
                  "Tuesday" : false //dayName = Object.keys(attendanceObj)[0]
                  }, 
                {//attendanceObj = attendanceObjs[2]
                  "Wednesday" : false //dayName = Object.keys(attendanceObj)[0]
                  }, 
                {//attendanceObj = attendanceObjs[3]
                  "Thursday" : false //dayName = Object.keys(attendanceObj)[0]
                  },
                {//attendanceObj = attendanceObjs[4]
                  "Friday" : true //dayName = Object.keys(attendanceObj)[0]
                  
                  } 
            ]
    }
];


// YOUR CODE BELOW
const attendanceCheck = (day) => {
    let presentStudent = [];
  
    for(let i = 0 ; i < classRoom.length; i++){
        let studentObj = classRoom[i];
        let studentName = Object.keys(studentObj)[0];
        let attendanceObjs = studentObj[studentName];
  
        for(let j = 0 ; j < attendanceObjs.length; j++ ) {
          let attendanceObj = attendanceObjs[j];
          let dayName = Object.keys(attendanceObj)[0]
        
            if(dayName === day && attendanceObj[dayName]){
            presentStudent.push(studentName)
            }
        }
    }
    return presentStudent;
}

console.log(attendanceCheck('Monday'));
  