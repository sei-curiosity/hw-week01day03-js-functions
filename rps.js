let userChoice1 = 'paper';
let listChoices =[`rock`, `paper`, `scissors`];
function playGame(userChoice){
let compChoice = listChoices[Math.round(Math.random()*2)]
console.log( compChoice)
 if(compChoice===userChoice){
    console.log("tie!")
} else if(((compChoice===`rock`)&&(userChoice===`paper`))||((compChoice===`paper`)&&(userChoice===`scissors`))||((compChoice===`scissors`)&&(userChoice==`rock`))){
console.log("you win!!")}
else if(((compChoice===`paper`)&&(userChoice===`rock`))||((compChoice===`scissors`)&&(userChoice===`paper`))||((compChoice===`rock`)&&(userChoice==`scissors`)))
{console.log("you lose!!")}


}

playGame(userChoice1);