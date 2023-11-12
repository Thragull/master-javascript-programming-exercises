function flipPairs(input) {
    // your code here
    let string = "";
    for (let i=0; i<input.length-1; i= i+2){
        string=string.concat(input[i+1], input[i]);
    }
    if (input.length%2 === 1) string=string.concat(input[input.length-1]);
    return string;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
