

function rollDice() 

{
    let x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);  // Math.floor is function used to return 
    // > ..the largest integer value  

    let y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

    console.log (`Dice rolled are ${x} and ${y}. Sum is ${x+y}.`)
}


rollDice() 

