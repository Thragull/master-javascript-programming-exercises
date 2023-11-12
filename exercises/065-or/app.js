function or(expression1, expression2) {
  // your code here
  if (!expression1){
    if (!expression2) return false;
  }
  return true;
}

let output = or(true, false);
console.log(output); // --> true;
