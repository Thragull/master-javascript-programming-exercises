function joinArrayOfArrays(arr) {
  // your code here
  let newArray = [];
  for (i=0; i<arr.length; i++) newArray = newArray.concat(arr[i]);
  return newArray;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
