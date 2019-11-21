const computerTurn = function(){
    const random = Math.round(Math.random() * 2); // create random number from 0 to 2
    let computerChoose = "";

    if(random === 0){       // if random equal to 0 let computerChoose equal to rock
        computerChoose = "rock";
    }

    else if(random === 1){  // random not equal to 0, So check if random equal to 1 let computerChoose equal to paper
        computerChoose = "paper";
    }

    else{   // random not equal to 0 and not equal to 1 let computerChoose equal to scissors
        computerChoose = "scissors";
    }

    return computerChoose;  //return what computer choose
}


const checkWinner = function(computerPlay, userPlay){
    let result = "";

    if(computerPlay === userPlay){  // if a computer plays the same as what the user play the result will be Tie
        result = "Tie";
    }

    else if(computerPlay === "rock" && userPlay === "paper"){
        result = "User Win";
    }

    else if(computerPlay === "paper" && userPlay === "rock"){
        result = "Computer Win";
    }

    else if(computerPlay === "scissors" && userPlay === "rock"){
        result = "User Win";
    }

    else if(computerPlay === "rock" && userPlay === "scissors"){
        result = "Computer Win";
    }

    else if(computerPlay === "paper" && userPlay === "scissors"){
        result = "User Win";
    }

    else if(computerPlay === "scissors" && userPlay === "paper"){
        result = "Computer Win";
    }

    return result;
}


const game = function(){
    let computerSelect = computerTurn();
    let userSelect = "paper";
    let whoWinner = checkWinner(computerSelect, userSelect);
    console.log(`[Computer Play: ${computerSelect}, User Play: ${userSelect}] -> Result: ${whoWinner}`);
}

game();