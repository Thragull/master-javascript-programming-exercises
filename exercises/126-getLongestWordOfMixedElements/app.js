function getLongestWordOfMixedElements(arr) {
    // your code here
    let word= ''
    let noString= true;
    for (i=0;i<arr.length;i++){
        if ((typeof arr[i] === 'string') && (noString === true)){
            word = arr[i];
            noString = false;
        }
        else if ((typeof arr[i] === 'string') && (word.length<arr[i].length)){
            word= arr[i];
        }
    }
    return word;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
