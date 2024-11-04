function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    display.focus(); // Ensure the display is focused
    display.setSelectionRange(display.value.length, display.value.length); // Set cursor to the end
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Capture keyboard input
document.addEventListener('keydown', (event) => {
    const display = document.getElementById('display');
    if ('0123456789+.-*/'.includes(event.key)) {
        appendToDisplay(event.key);
    }
    if (event.key === 'Enter') {
        calculateResult();
    }
    if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1); // Remove the last character
    }
    if (event.key === 'Delete' || event.key === 'C') {
        clearDisplay(); // Clear display on 'C' key
    }
});

// Focus the display input field on page load
window.onload = function() {
    const display = document.getElementById('display');
    display.focus(); // Set focus on the display
};
