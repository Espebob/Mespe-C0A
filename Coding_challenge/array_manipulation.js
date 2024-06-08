// Coding Challenge 1 __Array Manipulation

// Problem Statement:

// Given an array of integers and a target sum, determine if there exists a contiguous
// subarray within the array that sums up to the target. Return true if such a subarray exists,
// otherwise return false.

// Example:
// Input: arr = [4, 2, 7, 1, 9, 5], target = 17
// Output: true

// Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.

// Constraints:

// - The array will contain between 1 and 100,000 elements.
// - The elements in the array and the target sum will be between -1,000,000,000 and
// 1,000,000,000.

// Expected Time Complexity: O(n), where n is the length of the array.
// Expected Space Complexity: O(1).
//


// import the prompt-sync module
const prompt = require('prompt-sync')();

// function to check for subarray with the target sum
const subArraySum = (array, target) => {
    let start = 0; // initialize the start index of the current subarray
    let currentSum = 0; // initialize the current sum of the subarray
    let result = null;  // initialize the variable to store the result subarray
 
    // loop through each element in the array
    array.forEach((num, end) => {
        currentSum += num; // add the current element to the current sum

        // if the current sum is greater than the target, remove elements from the start to reduce the sum
        while (currentSum > target && start <= end) {
            currentSum -= array[start]; // subtract the element at the start
            start++; // move the start index to the right
        }

        // check whether the current sum equals the target
        if (currentSum === target) {
            result = array.slice(start, end + 1); // Store the subarray if sum equals target
        }
    });

    return result;
};

// Get input from the user
const inputArray = prompt('Enter the array elements separated by space: ');
const array = inputArray.split(' ').map(Number);
const target = Number(prompt('Enter the target sum: '));

// Constraints validation
if (array.length < 1 || array.length > 100000) {
    console.log("Try again, the array must contain between 1 and 100,000 elements.");
    process.exit(1);
}

const isArrayValid = array.every(num => num >= -1000000000 && num <= 1000000000);
if (!isArrayValid) {
    console.log("Try again, each element in the array must be between -1,000,000,000 and 1,000,000,000.");
    process.exit(1);
}

if (target < -1000000000 || target > 1000000000) {
    console.log("Try again, the target sum must be between -1,000,000,000 and 1,000,000,000.");
    process.exit(1);
}

// measure the time complexity (execution time) and space complexity (memory usage)
const startTime = process.hrtime.bigint();
const initialMemory = process.memoryUsage().heapUsed;

const result = subArraySum(array, target);

const endTime = process.hrtime.bigint();
const finalMemory = process.memoryUsage().heapUsed;

const executionTime = (endTime - startTime) / BigInt(1e6); // convert nanoseconds to milliseconds
const memoryUsage = (finalMemory - initialMemory) / 1024; // convert bytes to kilobytes


// display the result
if (Array.isArray(result)) {
    console.log("true");
    console.log(`The subarray [${result.join(', ')}] sums up to ${target}, which is equal to the target.`);
} else {
    console.log("false");
}

//console.log(`Time complexity: ${executionTime} ms`);
//console.log(`Space complexity: ${memoryUsage} KB`)
