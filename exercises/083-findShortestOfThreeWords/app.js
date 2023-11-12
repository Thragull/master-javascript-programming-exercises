function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let finalWord=word1;
    if (finalWord.length>word2.lenth) finalWord=word2;
    if (finalWord.length>word3.lenth) finalWord=word3;
    return finalWord;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
