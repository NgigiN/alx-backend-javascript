// This file takes the name of a user via cmd
// outputs the name and displays a message as it terminates

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name? ');
r1.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});
r1.on('close', () => {
  console.log('This important software is now closing');
});
