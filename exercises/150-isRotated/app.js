function isRotated(str1, str2) {
    // your code here
    if (str1.length != str2.length) return false;
    else{
      let aux1= str1.split('');
      let aux2= str2.split('');
      for (i=0; i<str2.length; i++){
        let char = aux2[0];
        aux2.shift();
        aux2.push(char);
        if (aux1.toString() === aux2.toString()) return true;
      }
      return false;
    }
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
