const rollDice = function(numOfDice){
    let total = 0;
    let string = 'Dice rolled are ';

    for (let i=0;i<numOfDice;i++){
        let n = Math.floor((Math.random()*6))+1;
        total += n;
        if (i < numOfDice-1){
            string += `${n}, `; 
        }
        else{
            string += `and ${n}.`
        }
    }

    string += ` Sum is ${total}`;
    console.log(string);
}

rollDice(2);
rollDice(3);
rollDice(4);
rollDice(5);