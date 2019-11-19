const diceRol = function() {
  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;
  let sumall = num1 + num2;
  console.log(`Dice rolled are ${num1} and ${num2}. Sum is ${sumall}`);
};
diceRol();
