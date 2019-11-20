

function playGame (userpicked){

if (userpicked.toLowerCase() == 'rock'){
  userpicked = 0
    } else if (userpicked.toLowerCase() == 'paper'){
      userpicked = 1
      } else if (userpicked.toLowerCase() =='scissors'){
          userpicked = 2
          }

          let computerP = Math.round(Math.random() * 2)
            switch (computerP){
            case 0:
            console.log('Computer Picked : Rock ')
            break;
            case 1:
            console.log('Computer Picked : paper ')
            break;
            case 2:
            console.log('Computer Picked : scissors ')
            break;
          }



if (userpicked == 0 && computerP == 0 || userpicked == 1 && computerP == 1 ||userpicked == 2 && computerP == 2)
{
console.log('you are tie')
}
else if (userpicked == 0 && computerP == 1 ||userpicked == 1 && computerP == 2 ||userpicked == 2 && computerP == 0 )
{
  console.log ('computer is winner ')
}
else if (userpicked == 0 && computerP == 2 || userpicked == 1 && computerP == 0 ||userpicked == 2 && computerP == 1)
{
console.log('user is winner ')
}



}

  playGame('paper')
