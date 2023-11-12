function findShortestWordAmongMixedElements(arr) {
    // your code here
    let word= ''
    let noString= true;
    for (i=0;i<arr.length;i++){
        if ((typeof arr[i] === 'string') && (noString === true)){
            word = arr[i];
            noString = false;
        }
        else if ((typeof arr[i] === 'string') && (word.length>arr[i].length)){
            word= arr[i];
        }
    }
    return word;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
