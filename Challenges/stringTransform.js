//coding Challenge 2 __String Transformation

//import the prompt-sync module
const prompt = require('prompt-sync')();

const transformString = (input) => {
    //function to reverse a string
    const reverseString = (str) => {
        return str.split('').reverse().join('');
    };

    //function to replace each character with its ASCII code
    const replaceWithASCII = (str) => {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    };

    // Check if the string contains only alphanumeric characters and spaces
    const isValidString = /^[a-zA-Z0-9\s]+$/.test(input);
    if (!isValidString) {
        return { error: "Try again. String must contain only alphanumeric characters and spaces." };
    }

    //checking if the length of the string is between 1 and 1000
    const length = input.length;
    if (length < 1 || length > 1000) {
        return "Try again. The length of the string must be between 1 and 1000.";
    }

    //measure the execution time
    const startTime = process.hrtime.bigint();

    //checking if the length of the string is divisible by 3, 5, or both
    const divisibleBy3 = length % 3 === 0;
    const divisibleBy5 = length % 5 === 0;

    let transformedString;
    //transformations based on divisibility
    if (divisibleBy3 && divisibleBy5) {
        //if the length of the string is divisible by both 3 and 5, both operations are perfomed in order
        const reversedString = reverseString(input);
        transformedString = replaceWithASCII(reversedString);
    } else if (divisibleBy3) {
        //if the length of the string is divisible by 3, the entire string is revesed
        transformedString = reverseString(input);
    } else if (divisibleBy5) {
        //if the length of the string is divisible by 5, each character is repleced with its ASCII code
        transformedString = replaceWithASCII(input);
    } else {
        //if the length of the string is not divisible by 3 or 5, the original string is returned
        transformedString = input;
    }

    //measure space complexity
    const memoryUsage = process.memoryUsage().heapUsed;

    //measure the execution time
    const endTime = process.hrtime.bigint();
    const executionTime = (endTime - startTime) / BigInt(1e6); //converting nanoseconds to milliseconds

    return { transformedString, executionTime, memoryUsage };
};


//get input from the user
const userInput = prompt('Enter a string of your choice: ');

//validating the user input and applying transformations
if (!userInput || userInput.trim() === '') {
    console.log("Try again. Please enter a valid string.");
} else {
    const { transformedString, executionTime, memoryUsage } = transformString(userInput);
    console.log(transformedString);

        // Display explanations to the user interface
        const length = userInput.length;
        if (length % 3 === 0 && length % 5 !== 0) {
            console.log(`The length of the string is ${length}, which is divisible by 3 but not by 5 or 15.`);
            console.log(`Therefore, the string is reversed, resulting in "${transformedString}"`);
        } else if (length % 5 === 0 && length % 3 !== 0) {
            console.log(`The length of the string is ${length}, which is divisible by 5 but not by 3 or 15.`);
            console.log(`Therefore, each character is replaced by its ASCII code, resulting in "${transformedString}"`);
        } else if (length % 3 === 0 && length % 5 === 0) {
            console.log(`The length of the string is ${length}, which is divisible by both 3 and 5 (15).`);
            console.log(`Therefore, the string is reversed, and then each character is replaced by its ASCII code, resulting in "${transformedString}"`);
        } else {
            console.log(`The length of the string is ${length}, which is not divisible by 3 or 5.`);
            console.log("Therefore, no transformation is applied.");
        }
        
         console.log(`Time complexity: ${executionTime} ms`);
        console.log(`Space complexity: ${memoryUsage / 1024} KB`); //converted bytes to kilobytes
    
}
