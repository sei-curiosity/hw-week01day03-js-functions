let computerThing = "";
let myKey = "";

const rockPaperScissors = function(userPic) {
  let computerPic = Math.floor(Math.random() * 3);
  switch (computerPic) {
    case 0:
      computerThing = "paper";
      break;
    case 1:
      computerThing = "rock";
      break;
    case 2:
      computerThing = "scissors";
      break;
  }

  if (userPic === computerThing) {
    result = "tie";
  } else {
    myKey = userPic + computerThing;
    switch (myKey) {
      case "rockpaper":
        result = "lose";
        break;
      case "paperrock":
        result = "win";
        break;
      case "scissorsrock":
        result = "lose";
        break;
      case "rockscissors":
        result = "win";
        break;
      case "paperscissors":
        result = "lose";
        break;
      case "scissorspaper":
        result = "win";
        break;

      default:
        result = "Wrong Choice!";
    }
  }
  return result;
};

//rockPaperScissors(0);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Please type rock OR paper OR scissors:`, inputGame => {
  //console.log(` ${inputNum}`);
  console.log(
    ` Game Result: ${rockPaperScissors(
      inputGame
    )}. Computer picked: ${computerThing}.`
  );
  readline.close();
});
