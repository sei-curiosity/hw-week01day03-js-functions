//three cases 
//1 the have a tie 
//2)rok is not a choice 
//3) rock was one of the scoices 

function prs(user_pik){
    let random_com = Math.floor(Math.random()*3)
    game_piks =['paper','rock','scissors']
    let computer_pik = game_piks[random_com]
    result =`the computer choosed ${computer_pik} and you choosed ${user_pik} .`
    if (user_pik == computer_pik){
        result+= 'it is tie '
    }
    else if (computer_pik!='rock'&& user_pik!='rock'){
        if (user_pik=='scissors'){
            result+="user wins"
        }
        else {
            result+="user loses"
        }

    }
    else{
        if (user_pik=='paper' && computer_pik!='scissors'){
            result+="user wins"
        }
        else {
            result+="user loses"
        }
        }

        return result

console.log(prs('rock'))
    }