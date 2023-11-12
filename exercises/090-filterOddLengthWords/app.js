function filterOddLengthWords(words) {
    // your code here
    return words.filter((element) => element.length%2 === 1);
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
