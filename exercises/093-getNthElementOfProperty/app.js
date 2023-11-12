// Write your function here
function getNthElementOfProperty (obj, key, n){
    if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length < n)) return undefined;
    return obj[key][n];
}