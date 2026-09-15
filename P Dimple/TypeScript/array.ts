import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let stack: number[] = [];
rl.question("Enter the number of elements: ", (nInput) => {
    let n = Number(nInput);
    rl.question("Enter the elements separated by spaces: ", (input) => {
        let elements = input.split(" ").map(Number);
        for (let i = 0; i < n; i++) {
            stack.push(elements[i]);
        }
        console.log("Stack:", stack);
        console.log("Top element:", stack[stack.length - 1]);
        let removed = stack.pop();
        console.log("Removed element:", removed);
        console.log("Stack after pop:", stack);
        rl.close();
    });
});