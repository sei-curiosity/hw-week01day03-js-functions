const playGame = function (choice){
    let string = `Computer picked: `;
    let computerChoice = Math.random();

    if (computerChoice <= 0.33){
        string += `rock.`;
        if (choice.toLowerCase()=='rock'){
            string += ` User picked: rock. it's a tie.`;
        }
        else if (choice.toLowerCase()=='paper'){
            string += ` User picked: paper. user wins.`;
        }
        else{
            string += ` User picked: scissors. user loses.`;
        }
        console.log(string);
    }
    else if (computerChoice <= 0.66){
        string += 'paper.';
        if (choice.toLowerCase()=='rock'){
            string += ` User picked: rock. user loses.`;
        }
        else if (choice.toLowerCase()=='paper'){
            string += ` User picked: paper. it's a tie.`;
        }
        else{
            string += ` User picked: scissors. user wins.`;
        }
        console.log(string);
    }
    else{
        string += 'scissors.';
        if (choice.toLowerCase()=='rock'){
            string += ` User picked: rock. user wins.`;
        }
        else if (choice.toLowerCase()=='paper'){
            string += ` User picked: paper. user loses.`;
        }
        else{
            string += ` User picked: scissors. it's a tie.`;
        }
        console.log(string);
    }
}

playGame('rock');
playGame('paper');
playGame('scissors');