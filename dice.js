let result = "";
let rolledNumbers = [];
let sumnum = 0;
const rollDice = function (numOfRolls) {
    if (numOfRolls == undefined) {
        numOfRolls = 2;
    }

    for (let i = 0; i < numOfRolls; i++) {
        rolledNumbers.push(parseInt(Math.random() * 7) + 1);
        result = ``
    }
    sumnum = rolledNumbers.reduce((a, b) => a + b, 0);
    return result = `Dice rolled are ${rolledNumbers}. Sum is ${sumnum}.`;
}

console.log(rollDice(5));