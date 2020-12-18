"use strict"

function returnInputAsOutput(input) {
    return input;
}
function testFunction(returnInputAsOutput, input, callback) {
    return input === callback;
}


console.log(testFunction(returnInputAsOutput, 'bob', 'bob'));
console.log(testFunction(returnInputAsOutput, 1, 2));
console.log(testFunction(returnInputAsOutput, true, false));


