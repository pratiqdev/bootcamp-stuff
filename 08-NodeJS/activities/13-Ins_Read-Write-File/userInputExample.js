const readline = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
});

let storedName;

readline.question('What is your name?', (name) => {
    storedName = name;
    console.log(`Hi, ${name}`);
    readline.close();
})

console.log(`${storedName} is interested in computers.`);