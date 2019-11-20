m=[1,2,3,4,5,6];
r = m[Math.floor(Math.random()*m.length)]
z=r;
let dicRoll=function(u,t){
    r = m[Math.floor(Math.random()*m.length)];
    x=r;
    y=z;
    i=x+y
 if(x&&y<=6){
 return i=(`${i} this is total of rolling two random number  ${x} ${y}`)}
}


 let dicRollThree=function(f,l,o){
    r = m[Math.floor(Math.random()*m.length)];
    x=r;
    y=z;
    o=x
    i=x+y+o
 if(x&&y&&o<=6){
 return i=(`${i} this is total of rolling two random number  ${x} ${y} ${o}`)}}
 console.log(dicRoll())
console.log(dicRollThree())
