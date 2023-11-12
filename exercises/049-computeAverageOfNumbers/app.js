// Write your function here
function computeAverageOfNumbers(array){
    let compute = 0;
    if (array.length === 0) return compute;
    else{
        for (i=0; i<array.length; i++){
            compute += array[i];
        }
    return compute/array.length;
}
}
