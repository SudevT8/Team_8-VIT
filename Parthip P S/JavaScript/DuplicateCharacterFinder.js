const readline = require("readline");

function findDuplicates(str) {
    const freq = {};

    for (const char of str) {
        if (char === " ") continue;
        freq[char] = (freq[char] || 0) + 1;
    }

    const duplicates = Object.keys(freq).filter(
        (char) => freq[char] > 1
    );

    return duplicates;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input) => {
    const duplicates = findDuplicates(input);

    if (duplicates.length === 0) {
        console.log("No duplicate characters found.");
    } else {
        console.log(`Duplicate characters: ${duplicates.join(", ")}`);
    }

    rl.close();
});
