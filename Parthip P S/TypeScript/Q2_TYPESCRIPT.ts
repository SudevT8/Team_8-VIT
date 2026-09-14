import * as readline from "readline";



function checkEvenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}

// --- User Input ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (input: string) => {
  const num = Number(input.trim());

  if (isNaN(num)) {
    console.error("Invalid input. Please enter a valid number.");
  } else {
    console.log(`${num} is ${checkEvenOrOdd(num)}`);
  }

  rl.close();
});
