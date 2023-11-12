function addToBackOfNew(arr, element) {
    // your code here
    let newArr = [];
    for (let i=0; i<arr.length; i++) newArr[i]=arr[i];
    newArr.push(element);
    return newArr;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
