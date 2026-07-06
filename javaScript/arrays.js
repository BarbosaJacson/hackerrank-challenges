function calcTip(bills) {

    let tips = [];
    let total = [];

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            tips[i] = bills[i] * 0.15;
        } else {
            tips[i] = bills[i] * 0.20;
        }
        total.push(bills[i] + tips[i]);
    }
    console.log(total);
    return total;
}
calcTip([125, 555, 44]);

/*
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
*/
function getSecondLargest(nums) {
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < largest) {
            secondLargest = nums[i];
        }
    }
    console.log(secondLargest);
    return secondLargest;
}
getSecondLargest([2, 3, 6, 6, 5]);