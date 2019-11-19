let dice1=0;
let dice2=0;
 let sum =0;

             function throwDice(max) {
                 dice1 =  Math.floor(Math.random() * Math.floor(max));
                 dice2 = Math.floor(Math.random() * Math.floor(max));
                     sum = dice1 + dice2;
                         return sum;
             }


             throwDice(7);
         console.log(sum);
