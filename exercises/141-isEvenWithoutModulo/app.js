function isEvenWithoutModulo(num) {
    // your code here
    if ((Math.floor(num/2) < num/2) || (Math.floor(num/2) > num/2)) return false;
    else return true;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
