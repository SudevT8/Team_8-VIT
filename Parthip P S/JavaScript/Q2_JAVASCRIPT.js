const readline = require("readline");



function sumArray(arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
}


const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter numbers separated by spaces: ", (input) => {
  const arr = input
    .trim()
    .split(" ")
    .map(Number)
    .filter((n) => !isNaN(n));

  if (arr.length === 0) {
    console.log("No valid numbers entered.");
  } else {
    const total = sumArray(arr);
    console.log(`Array   : [${arr.join(", ")}]`);
    console.log(`Sum     : ${total}`);
  }

  rl.close();
});
