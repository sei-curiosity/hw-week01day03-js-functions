function computerChoice() {
    let i = Math.floor(Math.random() * 3)
        if(i== 0 ){
            return 'papper'
        }else if (i== 1){
            return 'rock'
        } else if(i == 2){ 
            return 'scissors'
        }
    }

let c = function(userChoice){
        if (userChoice == "rock"){
            return ` ${i} "Rock win"`
        }else if (userChoice == "paper"){
            return ` ${i} "paper win"`
         }
          else if(userChoice == "scissors"){
            return ` ${i} "Scissors  win"`
        }
    }  

    
    c(computerChoice,userChoice)
    
       

       
        

      