// // code your solution here
// function saturdayFun(partty = "roller-skate"){
//     return (`This Saturday, I want to ${partty}!`);
// }
// saturdayFun();
// saturdayFun("bathe my dog");

// function mondayWork(work = "go to the office"){
//     return (`This Monday, I will ${work}.`);
// };
// mondayWork();
// mondayWork("work from home");

// function wrapAdjective (){
//     return function (){
//        return `You are *a hard worker*!`
//     };
//     }





// function saturdayFun(party = 'roller-skate'){
//     return( `This Saturday, I want to ${party}!`)
// }
// saturdayFun('bath my dog')

// function mondayWork(work = 'go to the office'){
//     return(`This Monday, I will ${work}.`)
// }
// mondayWork('work from home')

// let wrapAdjective = function(inner = '*'){
//    return function(outer = 'awesome'){
//         return `You are ${inner}${outer}${inner}!`
//     }
// }



function saturdayFun(roll = "roller-skate"){
    return (`This Saturday, I want to ${roll}!`)
}
saturdayFun()

const mondayWork = (work = "go to the office") => (`This Monday, I will ${work}.`)
mondayWork();

// let wrapAdjective = function(inner = "*"){
//     return function(outer = "special"){
//         return `you are ${inner}${outer}${inner}!`
//     }
// }

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  