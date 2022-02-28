//practice 

//#8 2022/2/28
// #7 2021/5/20 
//#6 02/09/2020  looked at solution
//#5 2019/12/23
//#4 2019/12/10 5mins
//#3 01:19-1:21
//#2 11/19/2019 01:00-01:19
//#1 date unknown



const lastFridayNight = (arr) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total += arr[i].amount
  }

  //console.log(total)
  return total
}

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

lastFridayNight(transactions)


// #7 2021/5/20 
//  let transactions = [
//       {
//         name: 'apples',
//         amount: 5
//       }, {
//         name: 'kleenex',
//         amount: 2
//       }, {
//         name: 'knitting supplies',
//         amount: 10,
//       }
//     ];

// function lastFridayNight(trans){
//   console.log(trans)
//   let total = 0;
//   for(let i = 0; i < trans.length; i++){
//     total += trans[i]['amount']
//   }
//   console.log(total)
//   return total
// }

//      lastFridayNight(transactions)

//#5 2019/12/23
// const lastFridayNight  = (trans) => {
//   total = 0;
//   for(let i = 0; i< trans.length; i++){ //need to check individual objects key, AMOUNT.
//     total += trans[i]['amount']; //if use, bracket. keep using bracket. Use quotation for name of keys. 
//     //return total don't return inside of the for loop. 
//   }
//   console.log(total)
//  return total
// }

// lastFridayNight(transactions)



// //#4 2019/12/10 5mins
// const lastFridayNight = ( transactions ) => {
//   let total = 0
  
//  for(let i = 0; i < transactions.length; i++){
//    let eachTrans = transactions[i];
//    total += eachTrans.amount;
//  }
//   return total
// }


// //#3 01:19-1:21
// const lastFridayNight  = (transactions) => {
  
//   let total  = 0; 
  
//   for(let i = 0; i < transactions.length; i++) {
//     let transaction = transactions[i];
//     total += transaction.amount
//   }
  
//   return total;
// }


// //#2  11/19/2019 01:00-01:19
// const lastFridayNight = (transactions) => {
//   let total = 0;

//   for(let i = 0; i < transactions.length; i++ ) {
//     let transaction = transactions[i]
//     total += transaction.amount;
//   }
 
//   return total;
// }



// //#1 
// let transactions = [{name: "Tons of glitter", amount: 70},
  

//    {
//     name: "Porcelain Pink Flamingos",
//     amount: 92
//   },
//   {
//     name: "Chandelier replacement",
//     amount: 10000,
//   },
//   {
//     name: "Dinner at TGIF x6",
//     amount: 350
//   }
// ];

// sumTransactions(transactions) // => 10512


// // YOUR CODE BELOW

// const lastFridayNight = (transactions) => {
//     let total = 0;
//     for(let i = 0; i< transactions.length; i++){
//     currentTransactions = transactions[i];
//     }
//     total += currentTransactions.amount;
//     return total;
// }


// console.log(lastFridayNight);
