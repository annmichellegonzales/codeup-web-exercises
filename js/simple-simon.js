
// array of sounds to play from
var sounds = [
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];

// function to play sounds from array. id is defined as the step list later.
function playSound(id) {
    sounds[id].play();
}


var inputEnabled = false;
var stepList = []; // step list is an empty array
var currentStep = 0; // beginning step starting at 0
var timeout;
var strict = false;
var fields = document.querySelectorAll('.field'); // selects the class of field, fields are the squares in simon
var info = document.querySelector('#info'); // selects the id of info
var startButton = document.querySelector('#start');  // selects the id of start, defines the button
var resetButton = document.querySelector('#reset'); // selects the id of reset, defines the button
var strictButton = document.querySelector('#strict'); // selects the id of strict, defines the button


// for loop iterates through the fields array. Fields are the different squares.
for(var i=0; i<fields.length; i++) {
    const val = i;
    fields[i].onclick = function() {
        if(!inputEnabled) return;

        playSound(val);
        if(val === stepList[currentStep]) {
            if(currentStep+1 === stepList.length) {
                inputEnabled = false;
                if(stepList.length < 4) { // changed 20 to 4 to see what happens: the number of tries needed to win.
                    generateLastStep(); // function .....
                    info.innerHTML = "Well done!" // the text will change when the step list is complete.
                    timeout = setTimeout(showSteps, 2000);
                    currentStep = 0;
                }
                else {
                    info.innerHTML = "Congratulations! You won!";
                    timeout = setTimeout(reset, 2000);
                }
            }
            else {
                currentStep++;
            }
        }
        else {
            info.innerHTML = "mistake!";
            inputEnabled = false;
            setTimeout(function() {
                if(strict) {
                    reset();
                }
                else {
                    currentStep = 0;
                    inputEnabled = false;
                    info.innerHTML = "Watch the sequence!";
                    timeout = setTimeout(showSteps, 2000);
                }
            }, 2000);

        }
    }
}

startButton.onclick = function() { //start button starts the game and will invoke the start function
    this.disabled = true; // this is
    start();
}

resetButton.onclick = reset;

function reset() { // fresh start with empty var's
    startButton.disabled = false;
    stepList = [];
    currentStep = 0;
    inputEnabled = false;
    clearTimeout(timeout);
    info.innerHTML = "Welcome to Simon Game!";
}

strictButton.onclick = function() {
    if(strict) {
        this.innerHTML = "strict mode disabled";
        this.className = this.className.replace(' red', '');
    }
    else {
        this.innerHTML = "strict mode enabled";
        this.className += ' red';
    }

    strict = !strict;
}

function start() {
    generateLastStep();
    info.innerHTML = 'Watch the sequence!';
    timeout = setTimeout(showSteps, 2000);
}


function generateLastStep() {
    stepList.push(rand(0, 3));
}

function showSteps() {
    if(currentStep > stepList.length-1) {
        currentStep = 0;
        info.innerHTML = stepList.length+' steps';
        inputEnabled = true;
        return;
    }

    var id = stepList[currentStep];

    playSound(id);
    fields[id].className += ' active';

    setTimeout(function() {

        fields[id].className = fields[id].className.replace(' active', '');

        currentStep++;

        timeout = setTimeout(showSteps, 0.3*1000); // give time for transition to finish

    }, 0.6*1000);

    info.innerHTML = "Watch the sequence!";
}


// random function provides a random number
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
