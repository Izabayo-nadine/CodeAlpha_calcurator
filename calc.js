// Restrict user input in the display field
document.getElementById('display').addEventListener('input', function (event) {
    const allowedChars = /^[0-9+\-*/.]*$/;
    const display = event.target;

    // Remove any characters not matching allowed characters
    if (!allowedChars.test(display.value)) {
        display.value = display.value.replace(/[^0-9+\-*/.]/g, '');
    }
});

function getChar(char) {
    const display = document.getElementById('display');
    const allowedChars = '0123456789+-*/.';

    // Check if the input character is allowed
    if (allowedChars.includes(char)) {
        display.value += char;
    }
}

function calcurate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function percentage() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);

    if (!isNaN(currentValue)) {
        display.value = currentValue / 100;
    }
}

function cleard() {
    const display = document.getElementById('display');
    display.value = '';
}

function delet() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
