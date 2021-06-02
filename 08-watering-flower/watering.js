


let watering = [
    {
        "Peony" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Rose" : [
                {"Monday" : false},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Hydrangea" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    { 
        "Sunflower" : [
                {"Monday" : true},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];


function wateringFlowerCheck(day){
  let flowerName = []
  for(let flowerObj of watering ){
    console.log("::::::::", flowerObj, ";::::")

    for(let flowerNameKey in flowerObj){
        
      let flowerDays = flowerObj[flowerNameKey]
      for(let eachDay of flowerDays){
          console.log("*******", eachDay, "****")
        if(eachDay[day]===true){
          flowerName.push(flowerNameKey)
        }
      }
    }
  }
  return flowerName
}

wateringFlowerCheck("Thursday")



