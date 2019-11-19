function rollDice(){
    ran1=Math.round(Math.random()*6)+1
    ran2=Math.round(Math.random()*6)+1
return `${ran1},${ran2} and the sum is ${ran1+ran2}`
}


function rollDice(number){
    let sum = 0;
    let nums = '';
 for(let i=0;i < number; i++){
    let a=Math.round(Math.random()*6)+1
    nums= nums + a +` ,`;
    sum+=a;
 }
 return `${nums} and the sum is ${sum}`
}

console.log(rollDice());
console.log(rollDice(4));