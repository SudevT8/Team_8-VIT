const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter strings separated by spaces: ", (input) => {
    let words = input.split(" ");
    words.sort((a, b) => a.length - b.length);
    console.log("Sorted strings:", words);
    rl.close();
});