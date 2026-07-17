const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
/* Write your code below. Good luck! 🙂 */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];    

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
 
console.log(bills, tips, totals);

/* Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. 
This is a difficult challenge (we haven't done this before)! Here is how to solve it:
1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. 
2. Next, loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable.
3. Finally, divide the 'sum' variable by the length of the array to get the average and return it from the function.
4. Call the function with the 'totals' array.
*/


