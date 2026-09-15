import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", (str) => {
    let seen = new Set<string>();
    let result: string = "";
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    console.log("String after removing duplicates:", result);
    rl.close();
});