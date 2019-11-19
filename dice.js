
let userChoice = prompt("how many times??");


let randomNumber = function(){

   let number = Math.random();
   let num1;
// if's :
if (number < 0.166){
return num1 = 1;
}

else if (number < 0.33){
return num1 = 2;
}
else if (number < 0.496){
return num1 = 3;
}

else if (number < 0.67){
return num1 = 4;
}
else if (number < 0.826){
return num1 = 5;
}

else{
return num1 = 6;
}



}

///


const rollDice = function (num2){

let sum = 0;
let x=" ";

for(i=0;i<=num2;i++){

let ranNumber =randomNumber();

x+= ranNumber + " ,";
sum+=randomNumber;

}

console.log("Dice rolled are "+x+". Sum is "+sum)

}

rollDice(userChoice);
