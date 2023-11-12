function modulo(num1, num2) {
    // your code here
    if (isNaN(num2)||isNaN(num1)||(num2 === 0)) return NaN;
    else { 
        if ((num1 > 0) && (num1 < num2)) return num1;
        if ((num1 < 0) && (num1 * (-1) < num2)) return num1;
        else{
            if (num1>0){
                let cociente = Math.floor(num1/num2); 
                let resto = num1-(num2*cociente);
                return resto;
            }
            else{
                let cociente = Math.floor(num1*(-1)/num2); 
                let resto = (num1*(-1)-(num2*cociente))*(-1);
                return resto;
            }
        }
    }
}

let output = modulo(25, 4);
console.log(output); // --> 1
