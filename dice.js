function dice(fDice , sDice){
    fDice= Math.floor( Math.random()*6)
    sDice= Math.floor( Math.random()*6)
    fDice++
    sDice++
return `Dice rolled are ${fDice} and ${sDice}. Sum is ${fDice + sDice}`

}
console.log(dice())