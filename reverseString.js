const reverseString = str =>
    str
        .toLowerCase()
        .split('')
        .reverse()
        .join('');

module.exports = reverseString;
// This module exports a function that takes a string, splits it into an array of characters, reverses the array, and then joins it back into a string.