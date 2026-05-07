
let calculated = false;

function calculate() {
    const display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value);
        calculated = true;
    } catch {
        display.value = 'Syntax Error!!';
        calculated = true;
    }
}

function appendValue(value) {
    const display = document.querySelector('input[name="display"]');
    if (calculated) {
        display.value = '';
        calculated = false;
    }
    display.value += value;
}

