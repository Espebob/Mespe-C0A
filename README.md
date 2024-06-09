# Mespe-C0A
COA Task force take home challenge

# Coding Challenges

This repository contains two coding challenges 
and UI challenge for an interactive photo gallery: **String Transformation** and **Array Manipulation**. 
Each challenge is documented with detailed instructions for installation, usage, and contribution.

## Table of Contents
1. [String Transformation](#string-transformation)
    - [Installation](#installation-string-transformation)
    - [Usage](#usage-string-transformation)
    - [Example Output](#example-output-string-transformation)
2. [Array Manipulation](#array-manipulation)
    - [Installation](#installation-array-manipulation)
    - [Usage](#usage-array-manipulation)
    - [Example Output](#example-output-array-manipulation)
    - [Constraints](#constraints-array-manipulation)
3. [Contributing](#contributing)
4. [License](#license)
5. [Contact](#contact)
6. [Acknowledgments](#acknowledgments)

## String Transformation

### Problem Statement (String Transformation)

Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
both operations in the order specified above

### Installation (String Transformation)

To run the String Transformation project, you need to have Node.js installed on your machine. Additionally, the `prompt-sync` module is used for user input. Follow these steps to get started:

1. Clone the repository:
    ```sh
    git clone https://github.com/Espebob/Mespe-C0A.git
    ```
2. Navigate to the Challenges directory:
    ```sh
    cd Challenges
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Install the `prompt-sync` module:
    ```sh
    npm install prompt-sync
    ```

### Usage (String Transformation)

To use this project, run the script using Node.js. The script will prompt you to enter a string and will perform transformations based on the length of the string.

1. Run the script:
    ```sh
    node stringTransform.js
    ```
2. Enter a string when prompted. The script will validate the input and apply the appropriate transformation.

### Example Output (String Transformation)

Example: Input: "Hamburger"
Output: "regrubmaH"
Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "regrubmaH".

Example: Input: "Pizza"
Output: "80 105 122 122 97"
Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15.
Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".

Example: Input: "Chocolate Chip Cookie"
Output: "eikooCpihCetalocohC"
Explanation: The length of the string is 21, which is divisible by 3 but not by 5 or 15.
Therefore, the string is reversed, resulting in "eikooCpihCetalocohC"

### Constraints (String Transformation)


- The string will only contain alphanumeric characters and spaces.
- The length of the string will be between 1 and 1000.

### Expected Time Complexity

The expected time complexity for the String Transformation algorithm is O(n), where n is the length of the string.

### Expected Space Complexity

The expected space complexity for the String Transformation algorithm is O(n), where n is the length of the string.


## Array Manipulation

### Problem Statement (Array Manipulation)

Given an array of integers and a target sum, determine if there exists a contiguous
subarray within the array that sums up to the target. Return true if such a subarray exists,
otherwise return false.

### Installation (Array Manipulation)

To run the Array Manipulation project, you need to have Node.js installed on your machine. Additionally, the `prompt-sync` module is used for user input. Follow these steps to get started:

1. Clone the repository:
    ```sh
    git clone https://github.com/Espebob/Mespe-C0A.git
    ```
2. Navigate to the Challenges directory:
    ```sh
    cd Challenges
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Install the `prompt-sync` module:
    ```sh
    npm install prompt-sync
    ```

### Usage (Array Manipulation)

To use this project, run the script using Node.js. The script will prompt you to enter an array and a target sum, and it will check if any subarray sums up to the target.

1. Run the script:
    ```sh
    node arrayMap.js
    ```
2. Enter array elements and the target sum when prompted. The script will validate the input and check for a subarray with the specified sum.

### Example Output (Array Manipulation)

Example:
Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.


### Constraints (Array Manipulation)

- The array must contain between 1 and 100,000 elements.
- Each element must be between -1,000,000,000 and 1,000,000,000.
- The target sum must be between -1,000,000,000 and 1,000,000,000.


# Interactive Photo Gallery

This is the Interactive Photo Gallery challenge. This challenge showcases an interactive photo gallery with images and captions that change appearance on hover.

## Getting Started

Follow these steps to set up and use the Interactive Photo Gallery:

1. **Access the Figma Designs:**
   - View the designs in prototype mode using this figma Link: https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=0-1&t=EjWOwG43lo6nnGcQ-0
   - Refer to the designs for visual guidance on implementing the gallery.

2. **Set Up Your Development Environment:**
   - Choose your preferred code editor or IDE.
   - Ensure you have the necessary tools and frameworks installed, including HTML, CSS, and JavaScript.

3. **Clone the Repository:**
   - Clone this repository to your local machine using Git:
     ```sh
     git clone https://github.com/Espebob/Mespe-C0A.git
     ```

4. **Organize Your Project:**
   - Create appropriate directories and files for your code and assets.
   - Use meaningful names for files and folders to maintain clarity and organization.

5. **Implement the Interactive Photo Gallery:**
   - Start with the HTML structure by adding elements for the gallery.
   - Style the gallery using CSS, following the design guidelines from Figma.
   - Add interactivity and functionality using JavaScript.
   - Test your implementation regularly to ensure it works as expected.

## Usage

1. **View the Photo Gallery:**
   - Open `index.html` in your web browser to view the photo gallery.

2. **Explore and Interact:**
   - Hover over images to see them change appearance.
   - Click on images to learn more about each one.

## Contributing

Contributions are welcome! If you'd like to contribute to this challenge

## License

This project is licensed under the MIT License. See the [LICENSE] file for details.

## Contact

For any inquiries or feedback, you can reach out to me on my email: mespe05@gmail.com
