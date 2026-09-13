const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parseDob(str) {
    const p = str.split("-");
    if (p.length !== 3) {
        return null;
    }

    const d = parseInt(p[0]);
    const m = parseInt(p[1]);
    const y = parseInt(p[2]);
    if (isNaN(d) || isNaN(m) || isNaN(y)) {
        return null;
    }

    const dob = new Date(y, m - 1, d);
    // rebuilt date must match the input, otherwise the day or month rolled over
    if (dob.getDate() !== d || dob.getMonth() !== m - 1 || dob.getFullYear() !== y) {
        return null;
    }
    return dob;
}

function findAge(dob, today) {
    let y = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    let d = today.getDate() - dob.getDate();

    if (d < 0) {
        m = m - 1;
        // day 0 of the current month gives the last day of the previous month
        const last = new Date(today.getFullYear(), today.getMonth(), 0);
        d = d + last.getDate();
    }
    if (m < 0) {
        m = m + 12;
        y = y - 1;
    }
    return [y, m, d];
}

rl.question("Enter your date of birth (dd-mm-yyyy): ", (str) => {
    const dob = parseDob(str.trim());
    const today = new Date();

    if (dob === null) {
        console.log("Invalid date format.");
    } else if (dob > today) {
        console.log("Date of birth cannot be in the future.");
    } else {
        const age = findAge(dob, today);
        console.log("Age: " + age[0] + " years, " + age[1] + " months, " + age[2] + " days");
    }
    rl.close();
});