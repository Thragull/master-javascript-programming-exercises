// Write your function here
function countAllCharacters (str) {
    let obj = {};
    for (let i=0; i<str.length; i++){
        if (!obj[str.charAt(i)]) obj[str.charAt(i)] = 1;
        else obj[str.charAt(i)]++;
    }
    return obj;
}