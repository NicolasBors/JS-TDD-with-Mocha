const capitalizeFirstLetters = (input) => {
    const splitInput = input.split(' ')
    for (i = 0; i < splitInput.length; i++) {
        splitInput[i] = splitInput[i].charAt(0).toUpperCase() + splitInput[i].substring(1)
    }
    return splitInput.join(' ');
}

module.exports = capitalizeFirstLetters