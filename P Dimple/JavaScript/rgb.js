const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Red value (0-255): ", (rInput) => {
    rl.question("Enter Green value (0-255): ", (gInput) => {
        rl.question("Enter Blue value (0-255): ", (bInput) => {
            let r = Number(rInput);
            let g = Number(gInput);
            let b = Number(bInput);
            let red = r.toString(16).padStart(2, "0");
            let green = g.toString(16).padStart(2, "0");
            let blue = b.toString(16).padStart(2, "0");
            let hex = "#" + red + green + blue;
            console.log("Hexadecimal color:", hex);
            rl.close();
        });
    });
});