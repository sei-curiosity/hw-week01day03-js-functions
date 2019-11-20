/*- Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user 
choose, then chooses `rock`, `paper`, or `scissors` randomly for the computer choose,
 and returns whether the user `win`, `lose`, or `tie.
    - Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
    - _**Hint:** Javascript includes a `Math.random` method._
    */


 const theWinner = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';        
    } else if (userChoice === 'rock' || 'paper' || 'scissors') {
        if (computerChoice === 'paper') {
           return 'You won!';
        } else {
           return 'Computer Won!';