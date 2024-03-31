// Node.js program to demonstrate the
// process.stdin Property

// Enter any texts ( User input)
// process.stdout.write(">>> ");
// process.stdin.on("data", (data) => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
// });

process.stdout.write(">>> ");
process.stdin.on("data", (number) => {
  for (let i = 0; i <= number; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log(" ");
  }
});
