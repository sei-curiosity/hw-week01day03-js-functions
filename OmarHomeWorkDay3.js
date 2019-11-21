

let game = function(){
   let computer = Math.random()
   let user = promot("Do you choose rock, paper or scissor?"); // coudn't fugar that out 
    if (computer> 0 && computer < 0.33) {
        computerChoice = "Rock";
      } else if (computer > 0.34 && computer < 0.67) {
        computer = "Paper";
      } else {
        computer = " Scissor";
      }
      console.log(computer);

}
game()

//Dice Roller 

let diceRoller = function(i,x){

  i = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  let y = i + x; 
  return y;

}   