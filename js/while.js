"use strict"

var i = 1;

while (i <= 32768) {
    console.log(i*=2);
}
//i*=2 taken from: https://www.sololearn.com/Discuss/786601/pls-i-need-a-java-code-to-count-numbers-like-this-1-2-4-8-16-32-64



var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log(Math.floor(Math.random() * 5) + 1);
    i++;
} while (allCones < 50);

