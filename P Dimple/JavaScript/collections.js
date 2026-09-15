const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter integers separated by spaces: ", (input) => {
    let numbers = input.split(" ").map(Number);
    numbers.sort((a, b) => a - b);
    console.log("Sorted list:", numbers);
    rl.close();
});