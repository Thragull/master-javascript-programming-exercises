// Write your function here
function select (arr,obj){
    let obj2 = {};
    arr.forEach((element) => {if (obj[element]) {obj2[element] = obj[element]}})
    return obj2;
}