const assert = require('assert');

const capitalizeFirstLetters = (input) => {
    const splitInput = input.split(' ')
    for (i = 0; i < splitInput.length; i++) {
        splitInput[i] = splitInput[i].charAt(0).toUpperCase() + splitInput[i].substring(1);
    }
    return splitInput.join(' '); 
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirstLetters transforms i am learning TDD correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
