function getSmallestElementAtProperty(obj, key) {
    // your code here
    const emptyArray = [];
    if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return emptyArray;
    let smallest = obj[key][0];
    for (i=1; i<obj[key].length; i++){
      if (obj[key][i]<smallest) smallest = obj[key][i];
    }
    return smallest;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
