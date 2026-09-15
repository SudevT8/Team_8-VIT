import * as readline from 'readline';

// Removes all whitespace characters dynamically from input string
export function removeAllSpaces(inputString: string): string {
    return inputString.replace(/\s+/g, '');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string with spaces: ', (answer) => {
    const result = removeAllSpaces(answer);
    console.log(`String without spaces: ${result}`);
    rl.close();
});