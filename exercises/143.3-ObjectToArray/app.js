function convertObjectToList(obj) {
  // your code here
  let array = [];
  for (let element in obj){
    array.push([element, obj[element]]);
  }
  return array;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
