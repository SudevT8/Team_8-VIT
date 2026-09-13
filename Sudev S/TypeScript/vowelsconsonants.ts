import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowels(str: string): number {
    const vow = "aeiou";
    let c = 0;

    for (let i = 0; i < str.length; i++) {
        if (vow.indexOf(str.charAt(i).toLowerCase()) !== -1) {
            c = c + 1;
        }
    }
    return c;
}

function countConsonants(str: string): number {
    let c = 0;

    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i).toLowerCase();
        if (ch >= "a" && ch <= "z" && "aeiou".indexOf(ch) === -1) {
            c = c + 1;
        }
    }
    return c;
}

rl.question("Enter a string: ", (str: string) => {
    if (str.trim().length === 0) {
        console.log("String cannot be empty.");
    } else {
        console.log("Vowels: " + countVowels(str));
        console.log("Consonants: " + countConsonants(str));
    }
    rl.close();
});