// ** A GAME "Rock ,Paper, Scissors ** 
// Write a function that vlidate if the choice either 
//one of the following options ( Rock , Paper or Scissors )
//  using Random function


/*
   - Create a file in this repo named `rps.js`
    - Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user choose, then chooses `rock`, `paper`, or `scissors` randomly for the computer choose, and returns whether the user `win`, `lose`, or `tie.
    - Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
    - _**Hint:** Javascript includes a `Math.random` method._*/

function GAMErps(){
 
    choice = Math.random();
    if ( choice == 'Rock'){
        console.log ("WIN! Rock");
    // or I can just use return "WIN ! ROCK"
    }
    else if ( choice == 'Paper'){
        console.log("WIN! Paper");

    }
    else if (choice == 'Scissor'){
        console.log(" WIN! SCISSOR") ;
    }
}
GAMErps();
