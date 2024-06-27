const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

// Example data
const numbers = [1, 2, 3, 4];
const names = ["Alice", "Bob", "Charlie", "David"];

// Process the numbers array
const processedNumbers = processArray(numbers);

// Format the names array based on processed numbers
const formattedStrings = formatArrayStrings(names, processedNumbers);

// Create user profiles
const userProfiles = createUserProfiles(names, formattedStrings);

// Output the results
console.log('Processed Numbers:', processedNumbers);
console.log('Formatted Strings:', formattedStrings);
console.log('User Profiles:', userProfiles);
