function getLongestElement(arr) {
    // your code here
    let longestArr = "";
    if (arr.length === 0) return longestArr;
    for (let i=0; i<arr.length; i++){
        if (longestArr.length < arr[i].length) longestArr = arr[i];
    }
    return longestArr;
}

let output = getLongestElement(['one', 'two', 'three', 'seven']);
console.log(output); // --> 'three'
