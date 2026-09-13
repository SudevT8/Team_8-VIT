import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n: number): number {
    let f = 1;

    for (let i = 2; i <= n; i++) {
        f = f * i;
    }
    return f;
}

rl.question("Enter a number: ", (val: string) => {
    const n = parseInt(val);

    if (isNaN(n) || n < 0) {
        console.log("Please enter a non negative number.");
    } else if (n > 20) {
        // past 20 the result no longer fits exactly in a number
        console.log("Number is too large for an exact result.");
    } else {
        console.log("Factorial of " + n + " is " + factorial(n));
    }
    rl.close();
});