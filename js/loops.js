"use strict"

console.log("test");

function showMultiplicationTable(num) {
    var i = 1;
    while (i <= 10) {
    console.log(num + " * " + i + " = " + (num * i));
    i++;

    }
}
console.log(showMultiplicationTable(7));



for (var i = 0; i < 10; i++) {
    var randomNum = Math.floor((Math.random()*180) + 20);
    if (randomNum % 2 === 0) {
        console.log("Here is an even number: " + randomNum);
    } else {
        console.log("Here is an odd number: " + randomNum);
    }
}

for ( let i = 0; i < 10; i++) {
    let x = i;
    let xstr = x.toString();
    let rep = xstr.repeat(x)
    console.log(rep)
}

for (var i = 105; i > 5; i - 5) {
    console.log(i - 5);
    i-=5;
}

