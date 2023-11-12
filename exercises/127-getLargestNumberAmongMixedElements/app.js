function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let number= 0;
    let noNumber= true;
    for (i=0;i<arr.length;i++){
        if ((typeof arr[i] === 'number') && (noNumber === true)){
            number = arr[i];
            noNumber = false;
        }
        else if ((typeof arr[i] === 'number') && (number<arr[i])){
            number= arr[i];
        }
    }
    return number;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
