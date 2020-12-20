"use strict"
console.log("test");

var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}




// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//
//     var bought = Math.floor(Math.random() * 5) + 1;
// } while
//

//console.log("Cannot sell you " + allCones + " I only have " + allCones - 1)
//     ( Math.floor(Math.random() * 5) + 1 < allCones);
// break;
