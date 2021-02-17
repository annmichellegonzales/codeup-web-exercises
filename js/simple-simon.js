// "use strict"


// array of sounds
var sounds = [
    new
    Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    new
    Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    new
    Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    new
    Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
];

// to play sounds
function playSound(id) {
    sounds[id].play();
}

var inputEnabled = false;
var stepList = [];
var currentStep = 0;
var timeout;
var strict = false;
var fields = document.querySelectorAll('.field');
var info = document.querySelector('#info');
var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');
var strictButton = document.querySelector('#strict');

for (var i = 0; i < fields.length; i++) {
    const val = i;
    fields[i].onclick = function () {
        if (!inputEnabled) return;

        playSound(val);
        if (val === stepList[currentStep]) {
            if (currentStep + 1 === stepList.length) {
                inputEnabled = false;
                if (stepList.length < 20) {
                    generateLastStep();
                    info.innerHTML = "Well done!"
                    timeout = setTimeout(showSteps, 2000);
                    currentStep = 0;
                } else {
                    info.innerHTML = "Congratulations! You won!";
                    timeout = setTimeout(reset, 2000);
                }
            } else {
                currentStep++;
            }
        } else {
            info.innerHTML = "mistake!";
            inputEnabled = false;
            setTimeout(function () {
                if (strict) {
                    reset();
                } else {
                    currentStep = 0;
                    inputEnabled = false;
                    info.innerHTML = "Watch the sequence!";
                    timeout = setTimeout(showSteps, 2000);
                }
            }, 2000);
        }
    }
}

startButton.onclick = function () {
    this.disabled = true;
    start();
}

resetButton.onclick = reset;

function reset() {
    startButton.disabled = false;
    stopList = [];
    currentStep = 0;
    inputEnabled = false;
    clearTimeout(timeout);
    info.innerHTML = "Welcome to Simon Game!";
}

strictButton.onclick = function () {
    if (strict) {
        this.innerHTML = "strict mode disabled";
        this.className = this.className.replace('red', '');
    } else {
        this.innerHTML = "strict mode enabled";
        this.className += "red";
    }
    strict = !strict;
}