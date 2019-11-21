const rollDice = function(){
    const numberOne = Math.round(Math.random() * 6) + 1;  // create random number from 1 to 6
    const numberTwo = Math.round(Math.random() * 6) + 1;
    const sum = numberOne + numberTwo;

    console.log(`Dice rolled are ${numberOne} and ${numberTwo}. Sum is ${sum}`)
}

rollDice()