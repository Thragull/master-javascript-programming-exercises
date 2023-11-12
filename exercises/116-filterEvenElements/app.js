function filterEvenElements(arr) {
    // your code here
    let newArr = [];
    let index = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            newArr[index]=arr[i];
            index++;
        }
    }
    return newArr;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
