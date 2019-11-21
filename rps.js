const playGame = function (choice){
    let string = `Computer picked: `;
    let computerChoice = Math.round(Math.random()*2);
    let game = ['rock','paper','scissors'];

    computerChoice = game[computerChoice]
    string += `${computerChoice} User picked: ${choice}. `;
    
    if (choice === computerChoice){
        string += ` It's a tie`;
    }
    else if ( (game.indexOf(choice)+1)%3 === game.indexOf(computerChoice) ){
        string += ` Computer wins`;
    }
    else{
        string += ` User wins`;
    }

    return string;
}

console.log(playGame('rock'));
console.log(playGame('paper'));
console.log(playGame('scissors'));