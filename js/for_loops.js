"use strict"

// console.log("test");
//
//my own original work:
// function showMultiplicationTable(num) {
//     var i = 1;
//     while (i <= 10) {
//     console.log(num + " * " + i + " = " + (num * i));
//     i++;
//
//     }
// }
//work from lecture video:


function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i += 1) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);

//if using source, document citation!
//original work:
// for (var i = 0; i < 10; i++) {
//     var randomNum = Math.floor((Math.random()*180) + 20);
//     if (randomNum % 2 === 0) {
//         console.log("Here is an even number: " + randomNum);
//     } else {
//         console.log("Here is an odd number: " + randomNum);
//     }
// }
//work from lecture video:


//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createTenRandomEvenOddMessages() {
    var random, evenOddString;
    for (var i = 0; i < 10; i += 1) {
        random = randomIntFromInterval(20, 200);
        evenOddString = (random % 2 === 0) ? 'even' : 'odd';
        console.log(random + " is " + evenOddString);
    }
}

createTenRandomEvenOddMessages();

//original work (group):
//
// for ( let i = 0; i < 10; i++) {
//     let x = i;
//     let xstr = x.toString();
//     let rep = xstr.repeat(x)
//     console.log(rep)
// }

//str.repeat

for (var i = 1; i <= 9; i += 1) {
    console.log(String(i).repeat(i));
}

//original work:
// for (var i = 105; i > 5; i - 5) {
//     console.log(i - 5);
//     i-=5;
// }
//from lecture:

for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}