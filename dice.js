function rollDice(rolls){
    let sumRandoms = 0
    let randomNum = []
    for (let i = 0; i < rolls; i++){
     randomNum.push(Math.round(Math.random() * 6) + 1)
}

for (let x = 0; x < randomNum.length; x++){
    sumRandoms += randomNum[x] 
}
console.log(`Dice rolled are ${randomNum} and sum is ${sumRandoms}`)

}

rollDice(4)