function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let arr = [];
    if ((!obj[key]) || (obj[key].length === 0) || (!Array.isArray(obj[key]))) return arr;
    arr = obj[key].filter((element) => element.length%2 === 0);
    return arr;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
