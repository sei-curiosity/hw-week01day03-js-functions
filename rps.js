function playGame(userChoice){
    pcChoice = Math.round(Math.random() * Math.round(3))
    

    if (pcChoice == 1){ // computer chooses rock
        console.log("Comupter picked Rock")
        if (userChoice == 'rock'){
            console.log("User picked " + userChoice + " ,tie, play gain")
        } 
        else if (userChoice == 'paper'){
            console.log("User picked " + userChoice + " User Wins")
        }
        else if (userChoice == 'scissors'){
            console.log("User picked " + userChoice + " User Loses")
        }
    }
    else if (pcChoice == 2){ // computer chooses paper
        console.log("Computer picked Paper")
        if (userChoice == "rock"){
            console.log("User picked " + userChoice + " User Looses")
        }
        else if (userChoice == "paper"){
            console.log("User picked " + userChoice + " ,tie, play gain")
        }
        else if (userChoice == "scissors"){
            console.log("User picked " + userChoice + " User Wins")
        }
    }
    else if (pcChoice == 3){ // computer chooses scissors
        console.log("Computer picked Scissors")
        if (userChoice == "rock"){
            console.log("User picked " + userChoice + " User Wins")
        }
        else if (userChoice == "paper"){
            console.log("User picked " + userChoice + " User Looses")
        }
        else if (userChoice == "scissors"){
            console.log("User picked " + userChoice + " ,tie, play gain")
        }
    }

}

playGame("rock")