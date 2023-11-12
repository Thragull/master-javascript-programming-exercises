function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let average = 0;
  if ((!obj[key]) || (!Array.isArray(obj[key])) || (obj[key].length === 0)) return average;
  for (let i = 0; i<obj[key].length; i++) average += obj[key][i];
  return average/obj[key].length;
}