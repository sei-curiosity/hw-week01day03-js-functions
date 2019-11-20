

const rollDice = function(dice1 , dice2, num){
    dice1  = Math.floor(Math.random() * 6)+1 ;
    dice2  = Math.floor(Math.random() * 6)+1 ;
    num    = 3
   
console.log("Dice rolled are "+ dice1+ " and "+dice2+". sum is " + (dice1 + dice2)  )
//Bouns
console.log("Dice rolled are "+ dice1+ " , "+dice2+" and "+num+" .sum is " + (dice1 +num+ dice2) )

}
rollDice()

//Bouns
rollDice(3)

