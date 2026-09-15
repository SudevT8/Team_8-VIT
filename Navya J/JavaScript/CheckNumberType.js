const readline = require('readline');
function checkNumberType(value) {
    const num = Number(value);
    if (isNaN(num)) {
        return 'Not a valid number';
    }
    if (Number.isInteger(num)) {
        return 'Integer';
    } else {
        return 'Floating-point number';
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number to check: ', (answer) => {
    const result = checkNumberType(answer);
    console.log(`The input is a: ${result}`);
    rl.close();
});