function getStringLength(string) {
    // your code here
    let number = 0;
    for (let x of string) number++;
    return number;
}

let output = getStringLength('hello');
console.log(output); // --> 5
