function convertDoubleSpaceToSingle(str) {
    // your code here
    let array=[];
    array=str.split("  ");
    return array.join(" ");
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
