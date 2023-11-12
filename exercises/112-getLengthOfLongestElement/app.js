function getLengthOfLongestElement(arr) {
    // Your code here
    let length = 0;
    if (arr.length === 0) return length;
    for (let i=0; i<arr.length; i++){
        if (length < arr[i].length) length = arr[i].length;
    }
    return length;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
