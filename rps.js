let r = "rock";
 let p = "paper";
 let s = "scissors";
 let x = " ";


 let user_choice = prompt("Please enter your choice from"+ r + " "+ p+ " "+ s);
 function getRandomInt(max) {
   answer =  Math.floor(Math.random() * Math.floor(max));

   if (answer ===0){
       x= "rock" ;
   }
   if (answer ===1){
       x = "scissors";
   }
   if (answer ===2){
       x = "paper";
   }
 }

 const comparision = function (choice1, choice2) {
    if (choice1 === choice2){
        return "tie!"
        }
       
        if(choice1 === "rock") {
            if(choice2 === "scissors") {
                return "rock wins";
            } else {
                return "paper wins";
            }
        }
        if(choice1 === "paper") {
            if(choice2 === "rock") {
                return "paper wins";
            } else {
                if(choice2 === "scissors") {
                    return "scissors wins";
            }
        }
        }
        if(choice1 === "scissors") {
            if(choice2 === "rock") {
                return "rock wins";
            } else {
                if(choice2 === "paper") {
                    return "scissors wins";
                }
            }
            
            
        }
      
        }
        getRandomInt(3);
        console.log("User choice: and Computer " );
        console.log(comparision( x ,user_choice));
       
    