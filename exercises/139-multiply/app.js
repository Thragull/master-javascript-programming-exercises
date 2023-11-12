function multiply(num1, num2) {
    // your code here
    let product = 0;
    let negative = false;

    if ((num1 < 0 && num2 > 0) || (num1>0 && num2 < 0)) negative = true;
    for (let i=1; i<Math.abs(num2)+1; i++) product += Math.abs(num1);
    if (negative) product = -product; 
    return product;
}

let output = multiply(4, 7);
console.log(output); // --> 28
