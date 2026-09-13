const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gcd(a, b) {
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

rl.question("Enter the first number: ", (in1) => {
    rl.question("Enter the second number: ", (in2) => {
        const a = parseInt(in1);
        const b = parseInt(in2);

        if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            console.log("Please enter two positive numbers.");
        } else {
            console.log("LCM of " + a + " and " + b + " is " + lcm(a, b));
        }
        rl.close();
    });
});