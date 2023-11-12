function findPairForSum(array, number) {
  // your code here
  for (i=0; i<array.length;i++){
    for (x=0; x<array.length; x++){
      if ((i != x) && (array[i]+array[x] === number)) return [array[i], array[x]];
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
