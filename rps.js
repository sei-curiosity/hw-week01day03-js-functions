function checkComputer(){
    let comp;
    comp = 2*Math.random();
    comp = Math.round(comp);

    let computerPick;

    if(comp === 0){
        computerPick = "Rock";
    } else if(comp ===1){
        computerPick = "Paper";
    } else {
        computerPick = "Scissors";
    }
    return computerPick;
}

const checkWinner = function (computer, user){
    if(computer === user){
        console.log("It's a Tie");
    }else if(computer === "Rock" && user === "Paper"){
        console.log("User wins");
    }else if(computer === "Rock" && user === "Scissors"){
        console.log("Computer wins");
    }else if(computer === "Paper" && user === "Rock"){
        console.log("Computer wins");
    }else if(computer === "Paper" && user === "Scissors"){
        console.log("User wins");
    }else if(computer === "Scissors" && user === "Rock"){
        console.log("User wins");
    }else if(computer === "Scissors" && user === "Paper"){
        console.log("Computer wins");}
}

let in1, in2;
in1 = checkComputer();
//in2 = checkComputer();
in2 = in1;
console.log(in1,in2);
console.log(`winner is ${checkComputer(in1,in2)}`);