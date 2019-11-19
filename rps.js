let result = "";
let computerPick = "";
const pick = ["Rock", "Paper", "Scissors"];

function playGame(userPick) {
    computerPick = pick[Math.floor(pick.length * Math.random())];

    if (userPick === computerPick) {
        return result = `Computer Picked: ${computerPick}. User picked: ${userPick}. Draw !`;
    } else if (userPick === 'Rock' && computerPick == 'Scissors' || userPick == 'Scissors' && computerPick == 'Paper' || userPick == 'Paper' && computerPick == 'Rock') {
        return result = `Computer Picked: ${computerPick}. User picked: ${userPick}. User Win :)`;
    } else {
        return result = `Computer Picked: ${computerPick}. User picked: ${userPick}. User Lose :(`;
    }
}

console.log(playGame('Paper'));