// Write your function here
function getIndexOf(char, str){
    const noIndex=-1;
    for (let i=0; i<str.length; i++){
        if (char === str[i]) return i;
    }
    return noIndex;
}