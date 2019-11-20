function checkComputer(){
    const com = Math.round(Math.random() *2)
    // console.log(com)
    let computerPic;
    if(com === 0){
        computerPic = "Rock"
    }
    else if(com === 1){
        computerPic = "Paper"
    }
    else{
        computerPic = "scissors"
    }
    return computerPic
    // console.log()
}
// checkComputer()

const checkWiner = function(computer, user){
    console.log(computer + " "  + user)
    if(computer === user){
        console.log("Tie")
    }
    else if(computer === "Paper" && user === "scissors"){
        console.log("User win")
    }
    else if(computer === "scissors" && user === "Paper"){
        console.log("Computer win")
    }
    else if (computer === "Rock" && user === "scissors"){
        console.log("Computer Win")
    }
    else if (computer === "scissors" && user === "Rock"){
        console.log("User Win")
    }
    else if(computer === "Rock" && user === "Paper"){
        console.log("User win")
    }
    else if (computer === "Paper" && user === "Rock"){
        console.log("Computer Win")
    }
}
// checkWiner(checkComputer(), "Rock")
const game = function(){
    const computerPick = checkComputer()
    const userPick = "Rock"
    checkWiner(computerPick, userPick)
}

game()