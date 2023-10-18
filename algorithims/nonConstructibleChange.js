coins = [5, 7, 1, 1, 2, 3, 22];

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b); // sorts in ascending order

  let currentChangeCreated = 0; // keeps track of the max amt of change that can be created
  // with current set of coins

  // iterates through each coin in the sorted array
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}
console.log(nonConstructibleChange(coins));

// 20 is the output
