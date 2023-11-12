function sumDigits(num) {
    // your code here
    let string = num.toString();
    if (string[0] === '-'){
        let numero = Number(string[1])*(-1);
        for (let i=2; i<string.length; i++) numero +=Number(string[i]);
        return numero;
    }
    else{
        let numero = Number(string[0]);
        for (let i=1; i<string.length; i++) numero +=Number(string[i]);
        return numero;
    }
}

let output = sumDigits(-316);
console.log(output); // --> 4
