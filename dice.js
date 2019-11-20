function dice(dice =2){
    result='Dice rolled are '
    for (i =0;i<dice;i++){
       if(i !=0 && dice != 1){ 
        if(i+1!=dice){  
            result +=' , ' }
        else{
            result +=' and '   }
    }
      

    result+=`${Math.floor(Math.random()*6)+1}`
    }
    return result

}

console.log(dice(4))
console.log(dice(6))
console.log(dice())

