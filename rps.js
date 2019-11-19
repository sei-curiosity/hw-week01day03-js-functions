function playFunction() {
    const userChoice = prompt("Do you choose rock, paper or scissors?");
    const computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    const compare = function(choice1, choice2) {
        if(choice1 === choice2) {
          return TheResultIsAtie ;
    }
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return rockwins ;
        } else {
            return paperwins;
        }
    }
    if(choice1 === "paper") {
        if(choice2 === "rock") {
           return paperwins ;
        } else {
            if(choice2 === "scissors") {
                return scissorswins ;
        }
    }
    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            return rockwins ; 
        } else {
            if(choice2 === "paper") {
               return scissorswins ;
            }
        }
    }
    }
    };
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
    compare(userChoice, computerChoice)
    } 