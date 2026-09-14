const readline = require("readline");

function calculateAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
    const arr = input
        .trim()
        .split(" ")
        .map(Number)
        .filter((n) => !isNaN(n));

    if (arr.length === 0) {
        console.log("No valid numbers entered.");
    } else {
        const avg = calculateAverage(arr);
        console.log(`Array: [${arr.join(", ")}]`);
        console.log(`Sum: ${arr.reduce((a, b) => a + b, 0)}`);
        console.log(`Count: ${arr.length}`);
        console.log(`Average: ${avg.toFixed(2)}`);
    }

    rl.close();
});
