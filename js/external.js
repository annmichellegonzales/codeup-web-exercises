"use strict";
/*console.log("Hello from external.js");
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

var isClassOpen = confirm("Is there room in the class?");
var studentSchedule = confirm("Will you be available?");
var abilityToEnroll = isClassOpen&&studentSchedule;
alert(isClassOpen&&studentSchedule);

alert("Welcome to my shop.");
var isCouponValid = confirm("Is your coupon valid?");
var moreThanTwoItems = confirm("Are you purchasing 2 or more items?");
alert(isCouponValid&&moreThanTwoItems);
var isPremiumMember = confirm("Are you a premium member?");
alert(isCouponValid&&isPremiumMember);
alert("Great! Premium members receive discounts on all purchases with a valid coupon. Thanks for shopping!");*/

function isFive(input) {
    return input == 5;
}

console.log(isFive(5));


function isShortWord(str) {
    return str.length <= 5;
}

console.log(isShortWord("a;sdoifnasd;ofin"));
console.log(isShortWord("cat"));


function isSameLength(str1, str2) {
    return str1.length === str2.length;
}

console.log(isSameLength("cat", "bat"), true);
console.log(isSameLength("cats", "bat"), false);


function getSmallerSegment(someString, someNumber) {
    var lower = someString.toLowerCase();
    return lower.substring(0, someNumber);
}

console.log(getSmallerSegment("battlegroundARENA", 4));
console.log(getSmallerSegment("CODEUP", 3));

//IIFE's be like:

(function() {

})();


(function() {

})();



























