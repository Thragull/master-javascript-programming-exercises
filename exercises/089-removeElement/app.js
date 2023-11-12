// Write your function here
function removeElement (arr, par){
    let newArray = [];
    newArray= arr.filter((element) => element != par);
    return newArray;
}