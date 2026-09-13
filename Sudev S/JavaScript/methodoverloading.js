const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Calculator {
    // JavaScript has no real overloading, so the same method decides
    // what to do from the arguments it actually receives.
    add(a, b, c) {
        if (typeof a === "string" && typeof b === "string") {
            return a + " " + b;
        }
        if (c === undefined) {
            return a + b;
        }
        return a + b + c;
    }
}

const cal = new Calculator();

function readNumbers(count, done) {
    const list = [];

    const next = (i) => {
        if (i === count) {
            done(list);
            return;
        }
        rl.question("Enter value " + (i + 1) + ": ", (val) => {
            list.push(parseFloat(val));
            next(i + 1);
        });
    };

    next(0);
}

console.log("1. Add two numbers");
console.log("2. Add three numbers");
console.log("3. Join two words");

rl.question("Enter your choice: ", (ch) => {
    const opt = parseInt(ch);

    if (opt === 1) {
        readNumbers(2, (n) => {
            console.log("Result: " + cal.add(n[0], n[1]));
            rl.close();
        });
    } else if (opt === 2) {
        readNumbers(3, (n) => {
            console.log("Result: " + cal.add(n[0], n[1], n[2]));
            rl.close();
        });
    } else if (opt === 3) {
        rl.question("Enter first word: ", (w1) => {
            rl.question("Enter second word: ", (w2) => {
                console.log("Result: " + cal.add(w1, w2));
                rl.close();
            });
        });
    } else {
        console.log("Invalid choice.");
        rl.close();
    }
});