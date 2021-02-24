// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.


function wait(num) {
    return new Promise((resolve, reject) => {
        if (num === 1000) {
            setTimeout(() => {
                resolve('You\'ll see this after 1 second');
            }, 1000);
        } else if (num === 3000) {
            setTimeout(() => {
                resolve('You\'ll see this after 3 seconds');
            }, 3000);
        } else {
            reject("nope");
        }
    });
}


wait(1000)
    .then((tick) => {
        console.log(tick);
    });


wait(3000).then((tock) => console.log(tock));
wait(5000).then((nah) => console.log(nah));