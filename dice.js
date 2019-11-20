


function rollDice(rollN){
    let num1 = Math.round(Math.random() * 6)
    let num2 = Math.round(Math.random() * 6)
   let result = num1+num2
 return ` the random numbers are ${num1} , ${num2} and the sum is ${result}`
}
console.log(rollDice())


//Bounce Answer)
//
function rollDice1(rollN){
  let result =0
  let i =0
    while (rollN > i) {
    let num1 = Math.round(Math.random() * 6)
    console.log(num1)
    result += num1
    i++
    }
      return `the sum of  ${result} `
}
console.log(rollDice1(3))
