
const rollDice = function(){
    const randNums = function (){
        let n1=1, n2=1;

        n1 += Math.round(5*Math.random());
        n2 += Math.round(5*Math.random());

        return [n1, n2, n1+n2]
    }
    let out = randNums();
    console.log(`dice rolled ${out[0]} and ${out[1]} and the sum is ${out[2]}`);
    console.log(out)}


rollDice();