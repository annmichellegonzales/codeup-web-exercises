"use strict"

// attempt:
// for (var userNum = prompt("Please enter an odd number between 1 and 50");) {
//     alert("The number must be odd");
// }
//followed along with lecture:

var userNum;

function isValid(input) {
    input = parseFloat(input);
    var isNumeric = !isNaN(input);
    var isOdd = input % 2 !== 0;
    var isInCorrectRange = input >= 1 && input <= 50;
    return isNumeric && isOdd && isInCorrectRange;
}

function getUserNumber() {
    var userNum;
    while(true) {
        userNum = prompt('Please enter an odd number that is between 1 and 50');
        if (isValid(userNum)) {
            break;
        }
        alert('INVALID NUMBER!')
    }
    return userNum;
}

function createOddNumberMessages(userNum) {
    console.log('Number to skip is: ' + userNum);
    console.log('');
    for(var i = 1; i <= 50; i += 1) {
        if(i === parseFloat(userNum)) {
            console.log('Yikes! Skipping number: ' + userNum);
            continue;
        }
        if (i % 2 === 0) {
            continue;
        }
        console.log('Here is an odd number: ' + i);
    }
}
userNum = getUserNumber();
createOddNumberMessages(userNum);



//attempted:
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
//    Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//
