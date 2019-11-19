/*  - Create a file in this repo named `rps.js`
- Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user choose, then chooses `rock`, `paper`, or `scissors` randomly for the computer choose, and returns whether the user `win`, `lose`, or `tie.
- Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
- _**Hint:** Javascript includes a `Math.random` method._
*/

function playGame(play){ 
    
    let computer = '';
    random = Math.round(Math.random()*2)
    if (random ===0){
        computer = `Scissors`;
    }
    else if (random ===1) {
        computer = `Rock`;
    }
    else if (random ===2){
        computer = `Paper`;
    }


if (computer === `Rock`) {
    if (play === `Rock`) {
        console.log(`Computer picked: ${computer}. User picked: ${play}.  It's a Tie.`)
    }
    else if (play === `Paper`){
        console.log(`Computer picked: ${computer}. User picked: ${play}.  User win.`)
    }
    else if (play === `Scissors`){
        console.log(`Computer picked: ${computer}. User picked: ${play}.  User Lose.`)
    }
}

if (computer === `Paper`) {
    if (play === `Rock`) {
        console.log(`Computer picked: ${computer}. User picked: ${play}.  User lose.`)
    }
    else if (play === `Paper`){
        console.log(`Computer picked: ${computer}. User picked: ${play}.  It's a Tie.`)
    }
    else if (play === `Scissors`){
        console.log(`Computer picked: ${computer}. User picked: ${play}.  User Win.`)
    }
}

if (computer === `Scissors`) {
    if (play === `Rock`) {
        console.log(`Computer picked: ${computer}. User picked: ${play}.  User Win.`)
    }
    else if (play === `Paper`){
        console.log(`Computer picked: ${computer}. User picked: ${play}.  User lose.`)
    }
    else if (play === `Scissors`){
        console.log(`Computer picked: ${computer}. User picked: ${play}.  It's a Tie.`)
    }
}
}
playGame(`Rock`);

