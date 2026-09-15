import * as readline from 'readline';


export function areAnagrams(str1: string, str2: string): boolean {
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sorted1 = cleanStr1.split('').sort().join('');
    const sorted2 = cleanStr2.split('').sort().join('');

    return sorted1 === sorted2;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first string: ', (firstStr) => {
    rl.question('Enter second string: ', (secondStr) => {
        const result = areAnagrams(firstStr, secondStr);
        console.log(`Are they anagrams? ${result}`);
        rl.close();
    });
});