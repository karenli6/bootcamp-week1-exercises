/**
 * Part 1:
 *    What will print and why? undefined because a was not decalred
 *    What will change if we delete line 15? Why? because a is now a global variable
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = ()  => {
  let a = 2;
  console.log(a);
}

const y = () =>{
  var a = 2;
  console.log(a);
  x();
}

var a = 1;
console.log(a);
y();
