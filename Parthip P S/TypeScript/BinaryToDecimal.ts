import * as readline from "readline";

function binaryToDecimal(binary: string): number {
    if (!/^[01]+$/.test(binary)) {
        throw new Error("Invalid binary number. Only 0 and 1 are allowed.");
    }

    let decimal = 0;
    const bits = binary.split("").reverse();

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === "1") {
            decimal += Math.pow(2, i);
        }
    }

    return decimal;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a binary number: ", (input: string) => {
    try {
        const result = binaryToDecimal(input.trim());
        console.log(`Decimal value: ${result}`);
    } catch (err: any) {
        console.error(err.message);
    }

    rl.close();
});
