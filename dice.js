/*- Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`


function rollDice() {
 let random1 = Math.floor(Math.random()*6)+1;
 let random2 = Math.floor(Math.random()*6)+1;
        console.log(`Dice rolled are ${random1} and ${random2}, Sum is ${random1+random2}`)
    
}
rollDice();

