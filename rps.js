///game :(

function game(user) {


    const pcNum = function () {
        let pc = Math.floor(Math.random() * 3)
        if (pc < 1) {
            return "rock"

        } else if (pc > 1) {
            return "paper"
        } else {
            return "scissors"
        }
    }
    
    if (user === "rock " || user === "paper" || user === "scissers") {
        if (user === pcNum()) {
            return `Computer picked: ${pcNum() }. User picked: ${user}.  tie`
        } else if (user === "rock" && pcNum() === "scissors") {
            return `Computer picked: ${pcNum() }. User picked: ${user}. User win `
        } else if (user === "paper" && pcNum() === "rock") {
            return `Computer picked: ${pcNum() }. User picked: ${user}. User win `
        } else if (user === "scissors" && pcNum() === "paper") {
            return `Computer picked: ${pcNum() }. User picked: ${user}. User win `
        } else {
            return `Computer picked: ${pcNum()}. User picked: ${user}. user lose `
        }

    } else {
        return "The entrance is wrong , choose one of (rock, paper, or scissors )"
    }

}

console.log(game("rock"))