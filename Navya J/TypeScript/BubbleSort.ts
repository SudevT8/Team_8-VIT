import * as readline from 'readline';


export function bubbleSort(arr: number[]): number[] {
    const sortedArr = [...arr];
    const n = sortedArr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return sortedArr;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by spaces: ', (answer) => {
    const inputNumbers = answer.split(/\s+/).map(Number).filter(n => !isNaN(n));
    const sortedNumbers = bubbleSort(inputNumbers);
    console.log(`Sorted array: ${sortedNumbers.join(', ')}`);
    rl.close();
});