//Q1
function displayNumberInfo() {
    var number = parseInt(document.getElementById('numberInput').value);
    if ( number <= 0) {
        alert('Please enter a positive number.');
        
    }

    document.getElementById('originalNumber').innerText = 'Number: ' + number;
    document.getElementById('roundOffValue').innerText = 'Round off value: ' + Math.round(number);
    document.getElementById('floorValue').innerText = 'Floor value: ' + Math.floor(number);
    document.getElementById('ceilValue').innerText = 'Ceil value: ' + Math.ceil(number);
}

//Q2

function Numberfloat() {
    var number = parseFloat(document.getElementById('Input').value);
    if ( number >= 0) {
        alert('Please enter a negative floating point number.');
        
    }

    document.getElementById('originalNumber').innerText = 'Number: ' + number;
    document.getElementById('roundOffValue').innerText = 'Round off value: ' + Math.round(number);
    document.getElementById('floorValue').innerText = 'Floor value: ' + Math.floor(number);
    document.getElementById('ceilValue').innerText = 'Ceil value: ' + Math.ceil(number);
}


//Q3

function displayAbsoluteValue() {
     var number = parseFloat(document.getElementById('num').value);

    var absValue = Math.abs(number);
    document.getElementById('absoluteValue').innerText = 'Absolute value: ' + absValue;
}

//Q4

function rollDice() {
    // Generate a random number between 1 and 6
    var diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceValue').innerText = 'You rolled: ' + diceValue;
}


//Q5

function generateRandomNumber() {
    // Generate a random number between 1 and 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('randomNumber').innerText = 'Random Number: ' + randomNumber;
}

//Q6

function displayWeight() {
    let weight = document.getElementById('weightInput').value;

    // Use a regular expression to extract the numeric part of the input
    let weightValue = parseFloat(weight.replace(/[^\d.]/g, ''));

    // if (isNaN(weightValue)) {
    //     alert('Please enter a valid weight.');
    //     return;
    // }

    document.getElementById('weightOutput').innerText = 'Your weight is: ' + weightValue + ' kg';
}



//Q7

// Generate a random secret number between 1 and 10

var num=6
function checkGuess() {
    var userGuess = parseInt(document.getElementById('userInput').value);
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    if ( userGuess < 1 || userGuess > 10) {
        alert('Please enter a number between 1 and 10.');
        return;
    }

    if (userGuess === num) {
        document.getElementById('result').innerText = 'Congratulations! You guessed the secret number.';
    } else {
        document.getElementById('result').innerText = 'Sorry, try again.'
    }
}