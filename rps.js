
 function computerValue(){
    computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
    
     computer = "paper"
} else if (computer == 1){
    computer = "rock"
} else {
    computer = "scissors"
}
 return computer

}

comp = computerValue();
console.log(comp)
function playWithMe(x){
    
    if(x ==  comp ){
        console.log(`Player choose ${x} and the computer choose ${comp},Drow No One Win`)
    }
    else if (x == "rock" && comp == "scissors"){
        console.log(`Player choose ${x} and the computer choose ${comp}, The Winner Is The Player`)

    }
    else if (x == "paper" && comp == "rock"){
        console.log(`Player choose ${x} and the computer choose ${comp}, The Winner Is The Player`)

    } else if (x == "scissors" && comp == "paper"){
        console.log(`Player choose ${x} and the computer choose ${comp}, The Winner Is The Player`)

    } else{
        console.log(`Player Choose ${x} and Compute choose ${comp} Computer Win`)
    }

}
playWithMe ("rock");



// 1. [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) 
// ([watch the game](https://www.youtube.com/watch?v=JtcHmiAcbZc))
//     - Create a file in this repo named `rps.js`
//     - Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user choose, 
// then chooses `rock`, `paper`, or `scissors` randomly for the computer choose, and returns whether the user 
// `win`, `lose`, or `tie.
// //     - Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
    // - _**Hint:** Javascript includes a `Math.random` method.