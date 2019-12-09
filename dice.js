// Dice Roller
// - Create a file in this repo and name it `dice.js`
// - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
// - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
// - BONUS: have your function take an argument of the # of dice to be rolled.
// - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`

function rollDice(){
    let sim1 = Math.floor(Math.random() * 6) + 1;
    let sim2 = Math.floor(Math.random() * 6) + 1;
    let sum = sim1 + sim2;

    console.log(`Dice rolled are ${sim1} and ${sim2} and the sum is ${sum}`)

}

console.log(rollDice())