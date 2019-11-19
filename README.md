[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
 
# JS Functions HW

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Create and checkout a new branch, named `response`.
1. When finished, `git add`, `git commit`, `git push` to your fork and submit a pull request.

## Questions

1. [Rock, Paper, Scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) ([watch the game](https://www.youtube.com/watch?v=JtcHmiAcbZc))
    - Create a file in this repo named `rps.js`
    - Write a function that takes `rock`, `paper`, or `scissors` as an argument for the user choose, then chooses `rock`, `paper`, or `scissors` randomly for the computer choose, and returns whether the user `win`, `lose`, or `tie.
    - Example: `playGame('rock') // Computer picked: paper. User picked: rock.  User lose.`
    - _**Hint:** Javascript includes a `Math.random` method._

2. Dice Roller
    - Create a file in this repo and name it `dice.js`
    - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
    - BONUS: have your function take an argument of the # of dice to be rolled.
    - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`

3.  Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name: toExponential() 
Description:
toExponential() returns a string, with a number rounded and written using exponential notation. A parameter defines the number of characters behind the decimal point
Example using it:
let k = 9.656;
     
k.toExponential(4);
the result is: 9.6560e+0
```

Method 2
```
Name: parseInt()
Description:
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
Example using it:
parseInt("10.33")
the result is: 10
```

Method 3
```
Name: toLowerCase()
Description: toLowerCase() A string is converted to lower case 
Example using it:
let t1 = "Hello World!";       
let t2 = text1.toUpperCase();
console.log(`${t2}`) 
the result is : HELLO WORLD!
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
