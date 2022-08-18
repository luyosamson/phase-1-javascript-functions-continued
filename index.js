// code your solution here
function saturdayFun(myTask ='roller-skate'){

    return (`This Saturday, I want to ${myTask}!`);

}
saturdayFun('bathe my dog');

//Lab 2: Implement a function expression called mondayWork. The function should
// return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as 
//the first parameter. If nothing is passed in, default to "go to the office"

const mondayWork=function(activity ='go to the office'){

return `This Monday, I will ${activity}.`
}
mondayWork('attend a meeting')


function wrapAdjective(style = "||") {
  return function (innerParam = "special") {
    return `You are ${style}${innerParam}${style}!`;
  }}
