function transformEmployeeData(array) {
  // your code here
  let employeeList = [];
  for (let x of array){
    let obj = {};
    for (let y of x){
      obj[y[0]]= y[1];
    }
    employeeList.push(obj);
  }
  return employeeList;
}

