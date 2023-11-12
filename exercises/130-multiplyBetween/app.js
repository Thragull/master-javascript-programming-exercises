function multiplyBetween(num1, num2) {
    // your code here
    let product = 1;
    if (num2<num1) return 0;
    for (let i=num1; i<num2; i++) product = product*i;
    return product;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
