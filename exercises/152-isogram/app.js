function isIsogram(text) {
  // your code here
  if (text.length === 0) return true;
  let aux = text.toLowerCase();
  for (let i = 0; i<aux.length; i++){
    for (let x= 0; x<aux.length; x++){
      if ((i!=x) && (aux[i] === aux[x])) return false;
    }
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
