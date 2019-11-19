const gamePlay = function()
{
    let userpick = ''
    let computerpick = (Math.floor(Math.random()*2))
    if(computerpick <= 1)
    computerpick = 'rock'
        if(userpick == 'rock'){
           return (`computer picks ${computerpick} and user picks ${userpick} it is tie`)
        }
        else if(userpick == 'paper')
        {
            return (`computer picks ${computerpick} and user picks ${userpick} user wins`)
        }
        else{
            return (`computer picks ${computerpick} and user picks ${userpick} user loses`)
        }
         if (computerpick > 1 && computerpick <= 2){
        computerpick = 'paper'
            if(userpick == 'rock'){
               return (`computer picks ${computerpick} and user picks ${userpick} user loses`)
            }
            else if(userpick == 'paper')
            {
                return (`computer picks ${computerpick} and user picks ${userpick} it is tie`)
            }
            else{
                return (`computer picks ${computerpick} and user picks ${userpick} user wins`)
            }
        } else{
                computerpick = 'scissors'
                    if(userpick == 'rock'){
                       return (`computer picks ${computerpick} and user picks ${userpick} user wins`)
                    }
                    else if(userpick == 'scissors')
                    {
                        return (`computer picks ${computerpick} and user picks ${userpick} it is tie`)
                    }
                    else{
                        return (`computer picks ${computerpick} and user picks ${userpick} user loses`)
                    }
            }    
            console.log(gamePlay())
        }
