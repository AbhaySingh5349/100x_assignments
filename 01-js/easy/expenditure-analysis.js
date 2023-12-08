/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let category_price_map = {};

  transactions.forEach((element) => {
    const category = element.category;
    const cost = element.price;

    if (category_price_map[category]) {
      category_price_map[category] += cost;
    } else {
      category_price_map[category] = cost;
    }
  });

  let ans_list = [];
  for (const category in category_price_map) {
    const obj = {
      category,
      totalSpent: category_price_map[category],
    };
    ans_list.push(obj);
  }

  return ans_list;
}

module.exports = calculateTotalSpentByCategory;
