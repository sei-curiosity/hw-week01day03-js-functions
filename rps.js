let computerThing = "";
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
    return "tie";
  }
  let myKey = userPic + computerThing;
  switch (myKey) {
    case "rockpaper":
      return "lose";
    case "paperrock":
      return "win";
    case "scissorsrock":
      return "lose";
    case "rockscissors":
      return "win";
    case "paperscissors":
      return "lose";
    case "scissorspaper":
      return "win";

    default:
      return "Wrong Choice!";
  }
};

rockPaperScissors(0);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Please type rock OR paper OR scissors:`, inputGame => {
  //console.log(` ${inputNum}`);
  console.log(
    `Computer picked: ${computerThing}. Game Result: ${rockPaperScissors(
      inputGame
    )}`
  );
  readline.close();
});
