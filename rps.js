let userChoice = prompt("rock, paper or scissors?");

let computerChoice = Math.random();

///

if (computerChoice <0.34){
    computerChoice = "rock";
console.log("Computer's choice is "+computerChoice)
console.log("Your choice is "+userChoice)

}
else if(computerChoice <=0.67){
    computerChoice = "paper";
console.log("Computer's choice is "+computerChoice)
console.log("Your choice is "+userChoice)


}
else{
    computerChoice = "scissors";
console.log("Computer's choice is "+computerChoice)
console.log("Your choice is "+userChoice)


}



///


const compare = function(user,computer){
    if(user===computer){
        return "The result is a tie!";

    }
//

    if(user==="rock"){
        if(computer==="scissors"){
            return "Your rock wins!";
        }
        else{
            return "Paper wins :(";
        }
    }
    if(user==="paper"){
        if(computer==="rock"){
            return "Your paper wins!";
        }
        else{
            return "Scissors wins :( ";
        }
    }
    if(user==="scissors"){
        if(computer==="paper"){
            return "Your scissors wins!";
        }
        else{
            return "Rock wins :( ";
        }
    }
};
compare(userChoice,computerChoice);
