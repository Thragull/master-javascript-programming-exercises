function detectOutlierValue(string) {
    // your code here
    let oddN = 0;
    let evenN = 0;
    let auxString = string.split(' ');
    for (i=0; i<auxString.length; i++){
        if (auxString[i]%2 === 0) evenN++;
        if (auxString[i]%2 === 1) oddN++;
    }
    if (evenN<oddN) {
        for (i=0; i<auxString.length;i++){
            if (auxString[i]%2 === 0) return i+1;
        }
    }
    else{
        for (i=0; i<auxString.length;i++){
            if (auxString[i]%2 === 1) return i+1;
        }
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
