function getAllLetters(str) {
    // your code here
    let array =[0];
    for (let i=0; i<str.length; i++){
        array[i]= str[i];
    }
    return array;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
