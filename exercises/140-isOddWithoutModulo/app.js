function isOddWithoutModulo(num) {
    // your code here
    if ((Math.floor(num/2) < num/2) || (Math.floor(num/2) > num/2)) return true;
    else return false;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
