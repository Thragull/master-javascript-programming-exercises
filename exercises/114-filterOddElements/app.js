function filterOddElements(arr) {
  // your code here
  let newArr =[];
  let index = 0;
  for (let i=0; i<arr.length; i++){
    if (arr[i]%2 === 1){
      newArr[index] = arr[i];
      index++;
    }
  }
  return newArr;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
