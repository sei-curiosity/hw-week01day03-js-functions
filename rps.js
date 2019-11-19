let userChoice = ("Do you choose rock, paper or scissors?");
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

let compare = function (choice1, choice2)
{
    if (choice1 === choice2)
    {
        return alert("The result is a tie!");
    }

    if (choice1 === "rock")
    {
        if (choice2 === "scissors")
        {
            return alert("rock wins!");
        }
        else if (choice2 === "paper")
        {
            return alert("paper wins!");
        }
    }
    else if (choice1 === "scissors")
    {
        if (choice2 === "rock")
        {
            return alert("rock wins!");
        }
        else if (choice2 === "paper")
        {
            return alert("schissors wins!");
        }
    }
};

compare(userChoice, computerChoice);
console.log (userChoice, computerChoice);