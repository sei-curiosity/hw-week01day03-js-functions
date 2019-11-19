function sum(diceRoll1, diceRoll2){
diceRoll_1 = Math.floor( Math.random() * 6 ) +1;

diceRoll_2 = Math.floor( Math.random() * 6 ) +1;


return `you rolled diceRoll1 is ${diceRoll_1} you rolled diceRoll2 is ${diceRoll_2} the sum is ${diceRoll_1 + diceRoll_2}`
    }
        console.log(sum())

