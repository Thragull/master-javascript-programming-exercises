let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
  let output = [];
  for (let element in inventory){
    let shoesN = 0;
    let average=0;
    for (let ele in inventory[element].shoes){
      shoesN++;
      average += inventory[element].shoes[ele].price;
    }
    average = average/shoesN;
    output.push({name: inventory[element].name, averagePrice: average})
  }
  return output;
}

console.log(renderAverageCostPerDesigner(currentInventory));
