function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let finalWord = "";
    if (finalWord.length<word1.length) finalWord=word1;
    if (finalWord.length<word2.length) finalWord=word2;
    if (finalWord.length<word3.length) finalWord=word3;
    return finalWord;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
