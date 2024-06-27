# Array and User Profile Manipulation
This project provides utility functions for manipulating arrays of numbers and strings, and creating user profiles based on these arrays. It consists of three main tasks implemented in JavaScript.

## Project Structure
- `arrayManipulation.js`: Contains functions to process arrays of numbers and format arrays of strings.
- `userInfo.js`: Contains a function to create user profiles.
- `main.js`: Demonstrates the usage of functions from `arrayManipulation.js` and `userInfo.js`.

## Files
### arrayManipulation.js
Contains two functions:
1. `processArray(numbers)`: 
- Takes an array of numbers as input.
- Returns a new array where each even number is squared and each odd number is tripled.

2. `formatArrayStrings(strings, processedNumbers)`:
- Takes an array of strings and an array of numbers processed by `processArray`.
- Modifies each string based on its corresponding number:
  - Capitalize the entire string if the number is even.
  - Convert the string to lowercase if the number is odd.

### userInfo.js
1. createUserProfiles(names, modifiedNames):
- Takes an array of original names and an array of modified names.
- Returns an array of objects, each containing `originalName`, `modifiedName`, and `id` (auto-incremented starting from 1).

### main.js
Demonstrates the usage of the above functions:
- Processes an array of numbers.
- Formats an array of strings based on the processed numbers.
- Creates user profiles based on the original and modified names.
- Outputs the results to the console.

## Example
Example Input:
- Numbers: [1, 2, 3, 4]
- Names: ["Alice", "Bob", "Charlie", "David"]

```
Processed Numbers: [ 3, 4, 9, 16 ]
Formatted Strings: [ 'alice', 'BOB', 'charlie', 'DAVID' ]
User Profiles: [
  { originalName: 'Alice', modifiedName: 'alice', id: 1 },
  { originalName: 'Bob', modifiedName: 'BOB', id: 2 },
  { originalName: 'Charlie', modifiedName: 'charlie', id: 3 },
  { originalName: 'David', modifiedName: 'DAVID', id: 4 }
]
```
