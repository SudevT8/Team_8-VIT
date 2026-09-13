import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clean(str: string): string {
    // ignore case and spaces so "Listen" and "Silent" still match
    return str.toLowerCase().replace(/\s+/g, "");
}

function isAnagram(s1: string, s2: string): boolean {
    const a = clean(s1);
    const b = clean(s2);
    if (a.length !== b.length) {
        return false;
    }

    const x = a.split("").sort().join("");
    const y = b.split("").sort().join("");
    return x === y;
}

rl.question("Enter the first string: ", (s1: string) => {
    rl.question("Enter the second string: ", (s2: string) => {
        if (isAnagram(s1, s2)) {
            console.log("The strings are anagrams.");
        } else {
            console.log("The strings are not anagrams.");
        }
        rl.close();
    });
});