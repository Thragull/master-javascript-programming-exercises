function search(array, value) {
  // your code here
  if (array.length === 0) return null;
  let top = array.length-1;
  let bottom = 0;
  while (bottom <= top){
    let index = Math.floor((top+bottom)/2)
    if (array[index]=== value) return index;
    if (array[index]<value){
      bottom = index+1;
    }
    else if (array[index]>value){
      top = index-1;
    }
  }
  return null;
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
