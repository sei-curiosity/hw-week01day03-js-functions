const getWinner = function(userShape, computerShape) {
  let winner = `Computer picked: ${computerShape}. User picked: ${userShape}. `;

  if (userShape === computerShape) {
    return "Tie.";
  }

  if (userShape === "rock") {
    if (computerShape === "paper") {
      winner += "Computer won!";
    } else {
      winner += "User won!";
    }
  }

  if (userShape === "paper") {
    if (computerShape === "scissors") {
      winner += "Computer won!";
    } else {
      winner += "User won!";
    }
  }

  if (userShape === "scissors") {
    if (computerShape === "rock") {
      winner += "Computer won!";
    } else {
      winner += "User won!";
    }
  }

  return winner;
};

const getComputerShape = function() {
  const computerShapeIndex = Math.round(Math.random() * 2);

  if (computerShapeIndex === 0) {
    return "rock";
  } else if (computerShapeIndex === 1) {
    return "paper";
  } else if (computerShapeIndex === 2) {
    return "scissors";
  }
};

const userChoice = function(shape) {
  const computerShape = getComputerShape();

  const winner = getWinner(shape, computerShape);
  console.log(winner);
};

userChoice("paper");
