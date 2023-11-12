function findSmallestNumberAmongMixedElements(arr) {
  // your code here
    let number= 0;
    let noNumber= true;
    for (i=0;i<arr.length;i++){
        if ((typeof arr[i] === 'number') && (noNumber === true)){
            number = arr[i];
            noNumber = false;
        }
        else if ((typeof arr[i] === 'number') && (number>arr[i])){
            number= arr[i];
        }
    }
    return number;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
