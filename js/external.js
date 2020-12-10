"use strict";
console.log("Hello from external.js");
alert('Welcome to my Website!');
var response = prompt("What's your favorite color?");
var message = 'Great, ' + response + ' is my fav too!'
alert(message);
var rentalPrice = parseInt(prompt("How much is it to rent a movie per night?"));
var littleMermaid = parseInt(prompt("How many nights did you rent The Little Mermaid for?"));
var brotherBear = parseInt(prompt("How many nights did you rent Brother Bear for?"));
var hercules = parseInt(prompt("How many nights did you rent Hercules for?"));
alert("Your total is $" + ((littleMermaid + brotherBear + hercules) * rentalPrice + "."));
var googlePay = parseInt(prompt("How much does Google pay?")),
    amazonPay = parseInt(prompt("How much does Amazon pay?")),
    facebookPay = parseInt(prompt("How much does Facebook pay?"));
var googleHours = parseInt(prompt("How many hours did you work at Google?")),
    amazonHours = parseInt(prompt("How many hours did you work at Amazon?")),
    facebookHours = parseInt(prompt("How many hours did you work at Facebook?"));
alert("Your total pay is: $" + (googlePay*googleHours + amazonPay*amazonHours + facebookPay*facebookHours) + ".");

let isClassOpen = confirm("Is there room in the class?")
let studentSchedule = confirm("Will you be available?")
alert("You may register:" + isClassOpen&&studentSchedule)
//
// var offerValid
//alert("Is the offer applicable:" +offerValid +
// A produc
// t offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.