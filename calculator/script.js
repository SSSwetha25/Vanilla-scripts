function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        // Handle percentages
        expression = expression.replace(/(\d+(\.\d+)?)(%)(\d+(\.\d+)?)/g, (match, percentNum, _, __, num) => {
            return `(${percentNum} / 100) * ${num}`;
        });

        expression = expression.replace(/(\d+(\.\d+)?)(%)/g, (match, num) => {
            // If the percentage is alone or at the end, handle it
            return `(${num} / 100)`;
        });

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
