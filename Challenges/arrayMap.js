//coding Challenge 1 __Array Manipulation

//import the prompt-sync module to enable the user input
const prompt = require('prompt-sync')();

//function to check for subarray with the target sum
const subArraySum = (array, target) => {
    let start = 0;  //initialize the start index of the current subarray
    let currentSum = 0; //initialize the current sum of the subarray
    let result = null;  //initialize the variable to store the result subarray
 
    //loop through each element in the array
    array.forEach((num, end) => {
        currentSum += num; //add the current element to the current sum

        //if the current sum is greater than the target, remove elements from the start to reduce the sum
        while (currentSum > target && start <= end) {
            currentSum -= array[start]; //subtract the element at the start
            start++; //move the start index to the right
        }

        // check whether the current sum equals the target
        if (currentSum === target) {
            result = array.slice(start, end + 1); //store the subarray if sum equals to the target
        }
    });

    return result;
};

//get input from the user
const inputArray = prompt('Enter array elements of your choice, and separate them by space: ');
const array = inputArray.split(' ').map(Number);
const target = Number(prompt('Enter the target sum: '));

//get constraints validation
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

//measure the time complexity (execution time) and space complexity (memory usage)
const startTime = process.hrtime.bigint();
const initialMemory = process.memoryUsage().heapUsed;

const result = subArraySum(array, target);

const endTime = process.hrtime.bigint();
const finalMemory = process.memoryUsage().heapUsed;

const executionTime = (endTime - startTime) / BigInt(1e6); //converted nanoseconds to milliseconds
const memoryUsage = (finalMemory - initialMemory) / 1024; //converted bytes to kilobytes


//displaying the results
if (Array.isArray(result)) {
    console.log("true");
    console.log(`The subarray [${result.join(', ')}] sums up to ${target}, which is the target sum.`);
} else {
    console.log("false");
}

console.log(`Time complexity: ${executionTime} ms`);
 console.log(`Space complexity: ${memoryUsage} KB`)
