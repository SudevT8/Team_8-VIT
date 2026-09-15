const readline = require('readline');

function calculateAge(dobString) {
    const dob = new Date(dobString);
    const today = new Date();

    if (isNaN(dob.getTime())) {
        throw new Error('Invalid date format. Please use YYYY-MM-DD.');
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Date of Birth (YYYY-MM-DD): ', (answer) => {
    try {
        const age = calculateAge(answer);
        console.log(`Calculated Age: ${age} years old`);
    } catch (error) {
        console.error(error.message);
    }
    rl.close();
});