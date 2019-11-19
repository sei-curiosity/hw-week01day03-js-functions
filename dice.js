const rollDice = function ()
{
    let stroll = Math.floor(Math.random()*6)+1
    let seroll = Math.floor(Math.random()*6)+1
    return(`Dice rolled are ${stroll} and ${seroll} Sum is ${stroll+seroll}`)
}
console.log(rollDice());
