
    const n =['Rock','paper','scissors'];
const playGame=function(x,r){
     r = n[Math.floor(Math.random()*n.length)]
     if(x==='Rock'&&r==='paper'){

      console.log(`${x} ${r} you lose`)
     }else if(x==='Rock'&&r==='scissors'){
        console.log(`${x} ${r} you win`)

     }
else if(x===r){
    console.log(`${x} ${r} this game is tie`)
}
else{
    console.log('invalid')
}
}

playGame('Rock')








